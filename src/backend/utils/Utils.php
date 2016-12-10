<?php
//Constants
require_once('/var/www/jachtml.com/jaclib/src/backend/includes/Config.php');
require_once(CGI_PATH . '/model/ResultObject.php');
require_once(CGI_PATH . '/model/ResultCodes.php');

class Utils
{//Utils Class
	
//////////UTILS/////////
    static public function validateEmail($email)
    {//validate email
        $filtered = filter_var($email, FILTER_VALIDATE_EMAIL);
        if($filtered !== false)
        {//good
            return true;
        }//good
        else
        {//bad
            return false;
        }//bad
    }//validate email

    static public function validateIP($ipAddress)
    {//validate ip
        return filter_var($ipAddress, FILTER_VALIDATE_IP);
    }//validate ip

    static public function sanitizeEmail($email)
    {//sanitizeEmail
        return filter_var($email, FILTER_SANITIZE_EMAIL);
    }//sanitizeEmail

	static public function formatAddSlashes($myString, $forceSlashes=false)
	{//formatAddSlashes
		if(!get_magic_quotes_gpc() || $forceSlashes)
		{//add 'em
			$newString = addSlashes($myString);
		}//add 'em
		else
		{//don't add
			$newString = $myString;
		}//don't add
		
		return $newString;
	}//formatAddSlashes
	
	static public function formatStripSlashes($myString, $forceSlashes=false)
	{//formatStripSlashes
		if(get_magic_quotes_gpc() || $forceSlashes)
		{//strip 'em
			$newString = stripSlashes($myString);
		}//strip 'em
		else
		{//don't strip
			$newString = $myString;
		}//don't strip
		
		return $newString;
	}//formatStripSlashes
	
	static public function debug($myString, $isDebugging=DEBUGGING)
	{//debug
		if($isDebugging)
		{//show output
			echo($myString."<BR/>");
		}//show output
	}//debug
	
	static public function printArray($myList)
	{//printArray
		foreach($myList as $key => &$value)
		{//echo
			Utils::debug($key."=>".$value."<BR/>");
		}//echo
	}//printArray
	
	static public function printArrayDebug($myList)
	{//printArrayDebug
		foreach($myList as $key => &$value)
		{//debug
			Utils::debug($key."=>".$value);
		}//debug
	}//printArrayDebug
	
	static public function checkStatement($stmt, $action, $actionID)
	{//checkStatement
		if (is_null($stmt))
		{//fail
			$resultObj = new ResultObject($action,$actionID,ResultCodes::RESULT_FAIL, array());
			echo($resultObj->getResultJSON());
			exit;
		}//fail
	}//checkStatement
	
	static public function checkQuery($result, $action, $actionID)
	{//checkQuery
		if($result === false)
		{//bad query
			$resultObj = new ResultObject($action,$actionID,ResultCodes::RESULT_FAIL, array());
			echo($resultObj->getResultJSON());
			exit;
		}//bad query
	}//checkQuery

}//Utils Class

?>