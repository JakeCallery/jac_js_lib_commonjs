define(function(require, exports, module){
    'use strict';
  module.exports = (function(){
       var FastMath = {};

	    FastMath.abs = function($value){
		    return ($value ^ ($value >> 31)) - ($value >> 31);
	    };
        
        //Return constructor
        return FastMath;
    })();
});