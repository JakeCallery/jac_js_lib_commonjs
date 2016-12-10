define(function(require, exports, module){
  'use strict';
  var EventDispatcher = require('jac/events/EventDispatcher');
  var ObjUtils = require('jac/utils/ObjUtils');
    module.exports = (function(){
        /**
         * Creates a GlobalEventBus Singleton object
         * to use ALWAYS new it up geb = new GlobalEventBus()
         * @extends {EventDispatcher}
         * @constructor
         */
        function GlobalEventBus(){
	        if(GlobalEventBus.prototype._singletonInstance){
		        return GlobalEventBus.prototype._singletonInstance;
	        }

	        //super
	        EventDispatcher.call(this);
	        GlobalEventBus.prototype._singletonInstance = this;
        }
        
        //Inherit / Extend
        ObjUtils.inheritPrototype(GlobalEventBus,EventDispatcher);
        
        //Return constructor
        return GlobalEventBus;
    })();
});