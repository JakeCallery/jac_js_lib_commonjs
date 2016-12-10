define(function(require, exports, module){
  'use strict';
  var BaseTarget = require('jac/logger/BaseTarget');
  var ObjUtils = require('jac/utils/ObjUtils');
  var LogEvent = require('jac/logger/events/LogEvent');
    module.exports = (function(){
        /**
         * Creates a ConsoleTarget object
         * @extends {BaseTarget}
         * @constructor
         */
        function ConsoleTarget(){

	        //super
	        BaseTarget.call(this);

	        //Private
	        var _hasConsoleLog = (('console' in window) && ('log' in window.console));

	        //Privileged Methods
	        this.getHasConsoleLog = function(){
		        return _hasConsoleLog;
	        };
        }

		//Inherit / Extend
	    ObjUtils.inheritPrototype(ConsoleTarget, BaseTarget);

	    /**
	     * Prints args to the browser console.  Dispatchers LogEvent.TARGET_UPDATED when done
	     * @param {...} $args variadic args
	     * @override
	     */
	    ConsoleTarget.prototype.output = function($args){
		    if(this.isEnabled){
			    var self = this;
		        ConsoleTarget.superClass.output.call(self, arguments);

				if(this.getHasConsoleLog()){
					var list = Array.prototype.slice.call(arguments,0);
					console.log.apply(console, list);
					this.dispatchEvent(new LogEvent(LogEvent.TARGET_UPDATED));
				}
		    }
	    };

        //Return constructor
        return ConsoleTarget;
    })();
});