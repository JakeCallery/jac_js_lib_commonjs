/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 * Date: 4/16/13
 * Time: 11:22 AM
 * To change this template use File | Settings | File Templates.
 */

define(['app/BaseObj', 'jac/utils/ObjUtils'], function(BaseObj, ObjUtils){

    return (function(){

        /**
         * FancyObj constructor
         * @param $myNum
         * @param $name
         * @param $privateMessage
         * @constructor
         */
        function FancyObj ($myNum, $name, $privateMessage){

            //super
            BaseObj.call(this, $name, $privateMessage);

            var _myNum = $myNum;

            //Privileged Functions
            this.getNum = function(){
              return _myNum;
            };
        }

        //Inherit / Extend
        ObjUtils.inheritPrototype(FancyObj, BaseObj);

	    FancyObj.prototype.sayName = function(){
	        //call function super
		    FancyObj.superClass.sayName.call(this);
	        console.log('Yep, that\'s a sweet name');
	    };

        //Return the constructor
        return FancyObj;
    })();

});