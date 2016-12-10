<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Jake
 * Date: 3/22/13
 * Time: 2:17 PM
 * To change this template use File | Settings | File Templates.
 */
require_once('/var/www/jachtml.com/jaclib/src/backend/includes/Config.php');
require_once(CGI_PATH.'/utils/Utils.php');

class MySQLDB
{//MySQLDB Class

    public $db;
    function __construct()
    {//constructor
        date_default_timezone_set('America/Detroit');
        $this->db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT);

        if(mysqli_connect_errno())
        {//error
            //echo ('Error: Could not connect to database. Please try again later.');
            Utils::debug('Error: Could not connect to database. Please try again later.', DEBUGGING);
            exit;
        }//error
        else
        {//good
            //echo("Good Connection");
            Utils::debug("Good Connection", DEBUGGING);
        }//good

    }//constructor

}//MySQLDB Class

?>