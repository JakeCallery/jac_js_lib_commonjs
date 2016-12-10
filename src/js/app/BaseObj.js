/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 * Date: 4/15/13
 * Time: 4:45 PM
 * To change this template use File | Settings | File Templates.
 */

define(function(){

    return (function(){

        //Static Private members
        var staticPrivateVar = "All Instances Share Me! (think singleton)";

        /**
         * BaseObj constructor
         * @param $name
         * @param $privateMessage
         * @constructor
         */
        function BaseObj ($name, $privateMessage){

            //Private vars (can only be accessed by functions defined in the constructor)
            var privateMessage = $privateMessage;

            //Public vars
            this.name = $name;
            this.colors = ["red", "blue", "green"];

            //Privileged (and public) methods
            this.getPrivateMessage = function(){
                return privateMessage;
            };
        };

        BaseObj.prototype.sayName = function(){
            console.log("Name: " + this.name);
        };

        //Return the constructor
        return BaseObj;
    })();

});