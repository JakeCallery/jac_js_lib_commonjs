<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Jake
 * Date: 3/28/13
 * Time: 1:39 PM
 * To change this template use File | Settings | File Templates.
 */

class ValidActions
{//ValidActions

    const INVALID_ACTION = "invalidaction";
    const INVALID_ACTOIN_ID = "invalidactionid";

    const TEST_ACTION = "testaction";
    const ADD_EMAIL = "addemail";
    const SELF_INVITE = "selfinvite";

    public static $validActions = array(ValidActions::TEST_ACTION, ValidActions::ADD_EMAIL, ValidActions::SELF_INVITE);

    static function isValidAction($action)
    {//isValidAction
        if(in_array($action, ValidActions::$validActions))
        {//valid
            return true;
        }//valid
        else
        {//not valid
            return false;
        }//not valid
    }//isValidAction
}//ValidActions