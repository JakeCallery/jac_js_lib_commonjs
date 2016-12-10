/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */

define([
'app/IFaceBaseObj',
'jac/utils/ObjUtils',
'jac/logger/Logger'],
function(IFaceBaseObj,ObjUtils, L){
    return (function(){
        /**
         * Creates a FancyIFaceBaseObj object
         * @extends {IFaceBaseObj}
         * @constructor
         */
        function FancyIFaceBaseObj(){
            //super
            IFaceBaseObj.call(this);
        }
        
        //Inherit / Extend
        ObjUtils.inheritPrototype(FancyIFaceBaseObj,IFaceBaseObj);

	    FancyIFaceBaseObj.prototype.init = function($param1){
		    L.log('Fancy Init: ' + $param1);
	    };

        //Return constructor
        return FancyIFaceBaseObj;
    })();
});
