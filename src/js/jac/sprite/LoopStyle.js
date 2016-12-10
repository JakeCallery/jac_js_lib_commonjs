define(function(require, exports, module){
    'use strict';
  module.exports = (function(){
        var LoopStyle = {};

	    LoopStyle.LOOP = 0;
	    LoopStyle.BOUNCE = 1;
	    LoopStyle.STOP = 2;
	    LoopStyle.RESET = 3;
	    LoopStyle.ONCE = 4;

        
        //Return constructor
        return LoopStyle;
    })();
});