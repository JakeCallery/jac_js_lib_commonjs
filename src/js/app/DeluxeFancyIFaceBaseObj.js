/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */

define(['app/FancyIFaceBaseObj','jac/utils/ObjUtils'],
function(FancyIFaceBaseObj,ObjUtils){
    return (function(){
        /**
         * Creates a DeluxeFancyIFaceBaseObj object
         * @extends {FancyIFaceBaseObj}
         * @constructor
         */
        function DeluxeFancyIFaceBaseObj(){
            //super
            FancyIFaceBaseObj.call(this);
        }
        
        //Inherit / Extend
        ObjUtils.inheritPrototype(DeluxeFancyIFaceBaseObj,FancyIFaceBaseObj);
        
        //Return constructor
        return DeluxeFancyIFaceBaseObj;
    })();
});
