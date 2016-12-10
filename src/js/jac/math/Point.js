define(function(require, exports, module){
    'use strict';
  module.exports = (function(){
        /**
         * Creates a Point object
         * @param {Number} [$x=0]
         * @param {Number} [$y=0]
         * @constructor
         */
        function Point($x,$y){
	        if($x === undefined){$x = 0;}
	        if($y === undefined){$y = 0;}
	        this.x = $x;
	        this.y = $y;
        }
        
        
        //Return constructor
        return Point;
    })();
});