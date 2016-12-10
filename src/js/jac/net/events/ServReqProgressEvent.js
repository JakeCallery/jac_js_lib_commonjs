define(function(require, exports, module){
  'use strict';
  var JacEvent = require('jac/events/JacEvent');
  var ObjUtils = require('jac/utils/ObjUtils');
	module.exports = (function(){

		/**
		 * Creates a ServReqProgressEvent object
		 * @param {String} $type
		 * @param {Object} $progressEvent
		 * @param {XMLHttpRequest} $request
		 * @extends {JacEvent}
		 * @constructor
		 */
		function ServReqProgressEvent($type, $progressEvent, $request){

			//super
			JacEvent.call(this, $type);

			/** @type {XMLHttpRequest} */
			this.request = $request;
			/** @type {Number} */
			this.position = $progressEvent.position;
			/** @type {Number} */
			this.totalSize = $progressEvent.totalSize;
		}

		//inherit / extend
		ObjUtils.inheritPrototype(ServReqProgressEvent, JacEvent);

		/** @const */
		ServReqProgressEvent.PROGRESS = 'servReqProgressEvent';

		//Return constructor
		return ServReqProgressEvent;
	})();
});