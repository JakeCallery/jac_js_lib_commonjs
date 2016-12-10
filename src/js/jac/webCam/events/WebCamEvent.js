define(function(require, exports, module){
  'use strict';
  var JacEvent = require('jac/events/JacEvent');
  var ObjUtils = require('jac/utils/ObjUtils');
    module.exports = (function(){
        /**
         * Creates a WebCamEvent object
         * @param {String} $type
         * @param {Object} [$data]
         * @extends {JacEvent}
         * @constructor
         */
        function WebCamEvent($type, $data){
            //super
            JacEvent.call(this, $type, $data);
        }
        
        //Inherit / Extend
        ObjUtils.inheritPrototype(WebCamEvent,JacEvent);

	    WebCamEvent.CONNECT_SUCCESS = 'webCamConnectSuccessEvent';
	    WebCamEvent.CONNECT_FAIL = 'webCamConnectFailEvent';
	    WebCamEvent.META_DATA_LOADED = 'webCamMetaDataLoadedEvent';
	    WebCamEvent.STREAM_ENDED = 'webCamStreamEndedEvent';

        //Return constructor
        return WebCamEvent;
    })();
});