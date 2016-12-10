<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Jake
 * Date: 9/21/12
 * Time: 11:08 AM
 * To change this template use File | Settings | File Templates.
 */

require_once('/var/www/jachtml.com/jaclib/src/backend/includes/Config.php');
require_once(CGI_PATH . '/utils/Utils.php');
require_once(CGI_PATH . '/model/ValidActions.php');

class RequestObject
{//RequestObject Class

    public $cleanParams;
    public $rawParams;

    public $action;
    public $actionID;

    function __construct($paramsList)
    {//RequestObject
        $this->cleanParams = array();
        $this->rawParams = array();

        //Grab action for request
        if(isSet($paramsList['action']))
        {//we have an action, save it
            if(ValidActions::isValidAction($paramsList['action']))
            {//good action
                $this->action = $paramsList['action'];
            }//good action
            else
            {//bad action, drop
                $this->action = ValidActions::INVALID_ACTION;
            }//bad action, drop

            Utils::debug("we have action: ".$this->action,false);
        }//we have an action, save it

        if(isset($paramsList['actionID']))
        {//we have actionID
            $paramsList['actionID'] = intval($paramsList['actionID']);
            if($paramsList['actionID'] !== 0)
            {//good id
                $this->actionID = $paramsList['actionID'];
            }//good id
            else
            {//bad id
                $this->actionID = ValidActions::INVALID_ACTOIN_ID;
            }//bad id
        }//we have actionID

        foreach($paramsList as $key => $value)
        {//clean each
            //Save off raw version
            $this->rawParams[$key] = $value;

            //Clean up
            $val = strip_tags($value);
            $val = htmlspecialchars($val);
            $val = Utils::formatAddSlashes($val);
            $this->cleanParams[$key] = $val;
        }//clean each

    }//RequestObject

}//ReqeuestObject Class
