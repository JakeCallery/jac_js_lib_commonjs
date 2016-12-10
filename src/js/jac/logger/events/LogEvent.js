define(function(require, exports, module){
  'use strict';
  var JacEvent = require('jac/events/JacEvent');
  var ObjUtils = require('jac/utils/ObjUtils');
    module.exports = (function(){
        /**
         * Creates a LogEvent object
         * @param {String} $type
         * @extends {JacEvent}
         * @constructor
         */
        function LogEvent($type){
            //super
            JacEvent.call(this, $type);
        }
        
        //Inherit / Extend
        ObjUtils.inheritPrototype(LogEvent,JacEvent);


	    /** @const */
		LogEvent.TARGET_UPDATED = 'logTargetUpdatedEvent';


        //Return constructor
        return LogEvent;
    })();
});