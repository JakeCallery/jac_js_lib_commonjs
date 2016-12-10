/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */

define([
'libs/domReady!',
'jac/logger/Logger',
'jac/logger/ConsoleTarget',
'app/BaseObj',
'jac/linkedList/LinkedList',
'jac/linkedList/PooledLinkedList'],
function(doc, L, ConsoleTarget, BaseObj, LinkedList, PooledLinkedList){
	L.addLogTarget(new ConsoleTarget());

	L.log('Linked List Test');

	var linkedList = new LinkedList();

	var obj1 = new BaseObj('test1', 'test message 1');
	var obj2 = new BaseObj('test2', 'test message 2');
	var obj3 = new BaseObj('test3', 'test message 3');
	var obj4 = new BaseObj('test4', 'test message 4');
	linkedList.addNode(obj1);
	linkedList.addNode(obj2);
	linkedList.addNode(obj3);
	linkedList.addNode(obj4);

	linkedList.resetCurrent();
	var node = linkedList.getNext();

	while(node !== null){
		L.log('Obj: ' + node.obj.name);
		node = linkedList.getNext();
	}

	L.log('getting obj3');
	node = linkedList.getNodeForObject(obj3);
	L.log('Get Obj: ' + node.obj.name);
	L.log('Removing Obj2');
	linkedList.removeNodeByObject(obj2);

	linkedList.resetCurrent();
	node = linkedList.getNext();
	while(node !== null){
		L.log('Obj: ' + node.obj.name);
		node = linkedList.getNext();
	}

	L.log('Removing Tail');
	linkedList.removeNodeByObject(obj4);
	linkedList.resetCurrent();
	node = linkedList.getNext();
	while(node !== null){
		L.log('Obj: ' + node.obj.name);
		node = linkedList.getNext();
	}

	L.log('Removing Head');
	linkedList.removeNodeByObject(obj1);
	linkedList.resetCurrent();
	node = linkedList.getNext();
	while(node !== null){
		L.log('Obj: ' + node.obj.name);
		node = linkedList.getNext();
	}

	var pooledLinkedList = new PooledLinkedList();
	pooledLinkedList.addNode(obj1);
	pooledLinkedList.addNode(obj2);
	pooledLinkedList.addNode(obj3);
	pooledLinkedList.addNode(obj4);

	L.log('======= Pooled Linked List Tests =======');
	pooledLinkedList.resetCurrent();
	node = pooledLinkedList.getNext();
	while(node !== null){
		L.log('Obj: ' + node.obj.name);
		node = pooledLinkedList.getNext();
	}

	L.log('getting obj3');
	node = pooledLinkedList.getNodeForObject(obj3);
	L.log('Get Obj: ' + node.obj.name);
	L.log('Removing Obj2');
	pooledLinkedList.removeNodeByObject(obj2);

	pooledLinkedList.resetCurrent();
	node = pooledLinkedList.getNext();
	while(node !== null){
		L.log('Obj: ' + node.obj.name);
		node = pooledLinkedList.getNext();
	}

	L.log('Removing Tail');
	pooledLinkedList.removeNodeByObject(obj4);
	pooledLinkedList.resetCurrent();
	node = pooledLinkedList.getNext();
	while(node !== null){
		L.log('Obj: ' + node.obj.name);
		node = pooledLinkedList.getNext();
	}

	L.log('Removing Head');
	pooledLinkedList.removeNodeByObject(obj1);
	pooledLinkedList.resetCurrent();
	node = pooledLinkedList.getNext();
	while(node !== null){
		L.log('Obj: ' + node.obj.name);
		node = pooledLinkedList.getNext();
	}

});
