<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Jake
 * Date: 3/22/13
 * Time: 2:37 PM
 * To change this template use File | Settings | File Templates.
 */

class BaseAction
{//BaseAction Class

    static protected $requiredParams = array(); //OVERRIDE ME

    protected $actionID;

    function __construct($actionid)
    {//BaseAction Constructor
        $this->actionID = $actionid;
    }//BaseAction Constructor

    public function validateInput()
    {//validate
        //OVERRIDE ME
        throw new Exception('BaseAction->validateInput needs to be overridden');
    }//validate

    static public function areParamsSet($rawParams)
    {//areParamsSet
        $goodSet = true;

        foreach(static::$requiredParams as $value)
        {//check all params are set
            $goodSet = isset($rawParams[$value]);
            if(!$goodSet)
            {//done
                break;
            }//done
        }//check all params are set

        return $goodSet;

    }//areParamsSet

}//BaseAction Class

?>