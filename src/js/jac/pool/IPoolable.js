define(function(require, exports, module){
    'use strict';
  module.exports = (function(){
	    /**
	     * @interface
	     */
        var IPoolable = {};

        IPoolable.init = function($args){};
	    IPoolable.recycle = function(){};

        //Return constructor
        return IPoolable;
    })();
});