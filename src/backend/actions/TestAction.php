<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Jake
 * Date: 4/17/13
 * Time: 12:05 PM
 * To change this template use File | Settings | File Templates.
 */
require_once('/var/www/jachtml.com/jaclib/src/backend/includes/Config.php');
require_once(CGI_PATH . '/model/ResultCodes.php');
require_once(CGI_PATH . '/model/ResultObject.php');
require_once(CGI_PATH . '/model/ValidationResult.php');
require_once(CGI_PATH . '/model/ValidActions.php');
require_once(CGI_PATH . '/model/ErrorCodes.php');
require_once(CGI_PATH . '/actions/BaseAction.php');

class TestAction extends BaseAction
{//TestAction
    static protected $requiredParams = array('data');

    const ACTION_NAME = ValidActions::TEST_ACTION;

    private $data;

    function __construct($actionID, $data)
    {//constructor
        parent::__construct($actionID);
        $this->data = $data;
    }//constructor

    public function testAction()
    {//testAction
        $resultObj = null;
        $valResult = $this->validateInput();

        if($valResult->getIsValid() !== true)
        {//not valid input
            $resultObj = new ResultObject(self::ACTION_NAME, $this->actionID,
                ResultCodes::RESULT_FAIL,
                array('errorCode'=>$valResult->getErrorCode(),
                    'errorMessage'=>$valResult->getErrorMessage()));
        }//not valid input
        else
        {//valid data
            $resultObj = new ResultObject(self::ACTION_NAME, $this->actionID, ResultCodes::RESULT_SUCCESS, array('data'=>$this->data));
        }//valid data

        //return result
        return $resultObj;

    }//testAction

    public function validateInput()
    {//validateInput
        $result = new ValidationResult();

        if(strlen($this->data) > 200)
        {//data too long
            $result->validate(false, ErrorCodes::DATA_TOO_LONG, 'Data too long.');
        }//data too long
        elseif(strlen($this->data) < 1)
        {//Data too short
            $result->validate(false, ErrorCodes::DATA_TOO_SHORT, 'Data too short.');
        }//Data too short

        return $result;
    }//validateInput

}//TestAction