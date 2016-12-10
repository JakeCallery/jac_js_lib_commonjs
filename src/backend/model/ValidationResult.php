<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Jake
 * Date: 3/22/13
 * Time: 5:06 PM
 * To change this template use File | Settings | File Templates.
 */

class ValidationResult
{//ValidationResult

    private $isValid = true;
    private $errorCode = "";
    private $errorMessage = "";

    function __constructor($defaultValidation=true)
    {//constructor
        $this->isValid = $defaultValidation;
    }//constructor

    function validate($isValid, $errorCode='', $errorMessage='')
    {//validate
        $this->isValid = $isValid;
        $this->errorCode = $errorCode;
        $this->errorMessage = $errorMessage;
    }//validate

   public function getIsValid()
   {//getIsValid
       return $this->isValid;
   }//getIsValid

    public function getErrorCode()
    {//getErrorCode
        return $this->errorCode;
    }//getErrorCode

    public  function  getErrorMessage()
    {//getErrorMessage
        return $this->errorMessage;
    }//getErrorMessage

}//ValidationResult