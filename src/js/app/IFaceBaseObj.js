/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */

define([
'jac/logger/Logger',
'app/IFace'],
function(L, IFace){
    return (function(){
        /**
         * Creates a IFaceBaseObj object
         * @implements {IFace}
         * @constructor
         */
        function IFaceBaseObj(){
	        L.log('New IFaceBaseObj');
        }
        
        IFaceBaseObj.prototype.init = function($param1){
	        L.log('IFaceBaseObj init: ' + $param1);
        };

	    IFaceBaseObj.prototype.destroy = function(){
		    L.log('IFaceBaseObj destroy');
	    };

        //Return constructor
        return IFaceBaseObj;
    })();
});
