define(function(require, exports, module){
  'use strict';
  var JacEvent = require('jac/events/JacEvent');
  var ObjUtils = require('jac/utils/ObjUtils');
    module.exports = (function(){

	    SequenceEvent.LOOP_COMPLETE = 'SequenceEvent.LOOP_COMPLETE';
	    SequenceEvent.STOPPED = 'SequenceEvent.STOPPED';
	    SequenceEvent.COMPLETE = 'SequenceEvent.COMPLETE';


	    /**
         * Creates a SequenceEvent object
         * @extends {JacEvent}
         * @constructor
         */
        function SequenceEvent($type,$data){
            //super
            JacEvent.call(this,$type,$data);
        }
        
        //Inherit / Extend
        ObjUtils.inheritPrototype(SequenceEvent,JacEvent);
        
        //Return constructor
        return SequenceEvent;
    })();
});