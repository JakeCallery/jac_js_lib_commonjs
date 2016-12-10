define(function(require, exports, module){
  'use strict';
  var JacEvent = require('jac/events/JacEvent');
  var ObjUtils = require('jac/utils/ObjUtils');
	module.exports = (function(){

		/**
		 * Creates a ServReqTimeOutEvent object
		 * @param {String} $type
		 * @param {XMLHttpRequest} $request
		 * @extends {JacEvent}
		 * @constructor
		 */
		function ServReqTimeOutEvent($type, $request){
			//super
			JacEvent.call(this, $type);

			/** @type {XMLHttpRequest} */
			this.request = $request;
		}

		//inherit / extend
		ObjUtils.inheritPrototype(ServReqTimeOutEvent, JacEvent);

		/** @const */
		ServReqTimeOutEvent.TIME_OUT = 'servReqErrorEvent';

		//Return constructor
		return ServReqTimeOutEvent;
	})();
});