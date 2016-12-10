<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Jake
 * Date: 3/22/13
 * Time: 2:26 PM
 * To change this template use File | Settings | File Templates.
 */

error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once('/var/www/jachtml.com/jaclib/src/backend/includes/Config.php');
require_once(CGI_PATH . '/utils/Utils.php');
require_once(CGI_PATH . '/model/RequestObject.php');
require_once(CGI_PATH . '/model/ResultObject.php');
require_once(CGI_PATH . '/model/ResultCodes.php');
require_once(CGI_PATH . '/model/ErrorCodes.php');
require_once(CGI_PATH . '/model/ResponseModes.php');
require_once(CGI_PATH . '/model/ValidActions.php');
require_once(CGI_PATH . '/includes/TokenBuilder.php');

//Save request obj
$reqObj = new RequestObject($_REQUEST);

//Grab session
session_start();

//Get mode
$responseMode = 'api';
if(isset($reqObj->cleanParams['mode']))
{//set response mode
    if($reqObj->cleanParams['mode'] == 'api')
    {//api mode
        $responseMode = ResponseModes::API_MODE;
    }//api mode
    else if($reqObj->cleanParams['mode'] == 'form')
    {//form mode
        $responseMode = ResponseModes::FORM_MODE;
    }//form mode
    else
    {//default
        $responseMode = ResponseModes::FORM_MODE;
    }//default
}//set response mode

//Handle Action
if(isset($reqObj->action) && isset($reqObj->actionID))
{//switch on command
    switch($reqObj->action)
    {//switch
        case ValidActions::TEST_ACTION:
            test($reqObj);
            break;

        default:
                Utils::debug('Bad Action: ' . $reqObj->action);
                $resultObj = new ResultObject('badAction', '0', ResultCodes::RESULT_FAIL, array('errorCode'=>ErrorCodes::BAD_ACTION ,'errorMessage'=>'bad action'));
                echo($resultObj->getResultJSON());
                exit();
            break;
    }//switch
}//switch on command
else
{//bad request
    if(!isset($reqObj->action))
    {
        $resultObj = new ResultObject("badAction","0",ResultCodes::RESULT_FAIL, array('errorCode'=>ErrorCodes::MISSING_ACTION,'errorMessage'=>'missing action'));
        echo($resultObj->getResultJSON());
        exit();
    }
    else if(!isset($reqObj->actionID))
    {
        $resultObj = new ResultObject("badRequest","BadActionID",ResultCodes::RESULT_FAIL, array('errorCode'=>ErrorCodes::MISSING_ACTION_ID, 'errorMessage'=>'missing action id'));
        echo($resultObj->getResultJSON());
        exit();
    }
}//bad request

function test($reqObj)
{//test
    $resultObj = null;
    $goodToken = checkToken($reqObj);

    if($goodToken !== true)
    {//bad token
        $resultObj = new ResultObject($reqObj->action, $reqObj->actionID,
            ResultCodes::RESULT_FAIL, array('errorCode'=>ErrorCodes::BAD_TOKEN, 'errorMessage'=>'bad token'));
    }//bad token

    //No matter what, unset token (poor man's nonce)
    session_unset();

    if($goodToken === true)
    {//run action
        include_once(CGI_PATH . '/actions/TestAction.php');
        if(TestAction::areParamsSet($reqObj->rawParams))
        {//good params
            $action = new TestAction($reqObj->actionID, $reqObj->rawParams['data']);
            $resultObj = $action->testAction();
        }//good params
        else
        {//bad params
            $resultObj = new ResultObject($reqObj->action, $reqObj->actionID,
                ResultCodes::RESULT_FAIL, array('errorCode'=>ErrorCodes::BAD_PARAMS, 'errorMessage'=>'bad params'));
        }//bad params
    }//run action

    if($resultObj != null)
    {//good result object
        echo($resultObj->getResultJSON());
    }//good result object
    else
    {//bad result object
        $resultObj = new ResultObject('noAction', '0', ResultCodes::RESULT_FAIL, array('errorCode'=>ErrorCodes::BAD_RESULT, 'errorMessage'=>'no result obj, server side fail'));
        echo($resultObj->getResultJSON());
    }//bad result object

    exit();

}//test

function checkToken($reqObj)
{//
    //Check Token
    if((!isset($_SESSION['token']) ||
        !isset($reqObj->cleanParams['token']) ||
        $_SESSION['token'] !== $reqObj->cleanParams['token']) &&
        !IGNORE_TOKEN)
    {//bad token
        return false;
    }//bad token
    else
    {//good token
        return true;
    }//good token
}//