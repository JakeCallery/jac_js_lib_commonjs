<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Jake
 * Date: 3/23/13
 * Time: 9:45 PM
 * To change this template use File | Settings | File Templates.
 */

class TokenBuilder
{//TokenBuilder

    static public function buildToken($id)
    {//buildToken
        $time = time();
        $uniqueID = uniqid(mt_rand(),true);
        $token = uniqid($id.$uniqueID.$time);
        return md5($token);
    }//buildToken

}//TokenBuilder

?>