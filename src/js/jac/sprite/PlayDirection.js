define(function(require, exports, module){
    'use strict';
  module.exports = (function(){
        var PlayDirection = {};

	    PlayDirection.BACKWARD = -1;
	    PlayDirection.STOPPED = 0;
	    PlayDirection.FORWARD = 1;

        //Return constructor
        return PlayDirection;
    })();
});