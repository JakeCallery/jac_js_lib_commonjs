<?php

require_once(dirname(__FILE__).'/ResultCodes.php');

class ResultObject
{//ResultObject class

    private $result;

	function __construct($action, $actionID, $status, $params)
	{//constructor
		$this->result = array('status' => $status,);
		$this->result['action'] = $action;
		$this->result['actionID'] = $actionID;
		
		//loop through params
		foreach($params as $key => &$value)
		{//get params
			$this->result[$key] = $value;
		}//get params

	}//constructor

    public function addNextToken($token)
    {//addNextToken
        $this->result['nextToken'] = $token;
    }//addNextToken

    public function getResultObj()
    {//getResultObj
        return $this->result;
    }//getResultObj

    public function getResultJSON()
    {//getResultJSON
        return json_encode($this->result);
    }//getResultJSON

    public function getIsSuccess()
    {//getIsSuccess
        if($this->result['status'] === ResultCodes::RESULT_SUCCESS)
        {//good result
            return true;
        }//good result
        else
        {//bad result
            return false;
        }//bad result
    }//getIsSuccess

}//ResultObject class
?>