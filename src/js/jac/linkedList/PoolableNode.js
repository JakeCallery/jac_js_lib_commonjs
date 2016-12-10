define(function(require, exports, module){
  'use strict';
  var Node = require('jac/linkedList/Node');
  var ObjUtils = require('jac/utils/ObjUtils');
  var IPoolable = require('jac/pool/IPoolable');
  var InterfaceUtils = require('jac/utils/InterfaceUtils');
  var ILinkedListable = require('jac/linkedList/ILinkedListable');
    module.exports = (function(){
        /**
         * Creates a PoolableNode object
         * @implements {IPoolable}
         * @extends {Node}
         * @constructor
         */
        function PoolableNode(){
            //super
            Node.call(this);
        }
        
        //Inherit / Extend
        ObjUtils.inheritPrototype(PoolableNode,Node);

	    PoolableNode.prototype.init = function($args){
		    var self = this;
		    this.prev = null;
		    this.next = null;
		    this.obj = arguments[0];

		    if(this.obj !== undefined && this.obj !== null && InterfaceUtils.objectImplements(this.obj, ILinkedListable)){
			    this.obj.linkedListNodeRef = self;
		    }
	    };

	    PoolableNode.prototype.recycle = function(){
		    if(this.obj !== undefined && this.obj !== null && InterfaceUtils.objectImplements(this.obj, ILinkedListable)){
			    this.obj.linkedListNodeRef = null;
		    }

		    this.prev = null;
		    this.next = null;
		    this.obj = null;

	    };

        //Return constructor
        return PoolableNode;
    })();
});