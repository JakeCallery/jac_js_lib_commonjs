define(function(require, exports, module){
  'use strict';
  var JacEvent = require('jac/events/JacEvent');
  var ObjUtils = require('jac/utils/ObjUtils');
	module.exports = (function(){

		/**
		 * Creates a ServReqErrorEvent object
		 * @param {String} $type
		 * @param {Object} $errorEvent
		 * @param {XMLHttpRequest} $request
		 * @extends {JacEvent}
		 * @constructor
		 */
		function ServReqErrorEvent($type, $errorEvent, $request){
			//super
			JacEvent.call(this, $type);

			/** @type {XMLHttpRequest} */
			this.request = $request;
			/** @type {Object} */
			this.errorEvent = $errorEvent;
		}

		//inherit / extend
		ObjUtils.inheritPrototype(ServReqErrorEvent, JacEvent);

		/** @const */
		ServReqErrorEvent.ERROR = 'servReqErrorEvent';

		//Return constructor
		return ServReqErrorEvent;
	})();
});