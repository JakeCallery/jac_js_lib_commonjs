/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 * Date: 4/17/13
 * Time: 10:39 AM
 * To change this template use File | Settings | File Templates.
 */

require(
['libs/domReady!','app/BaseObj', 'app/FancyObj', 'jac/events/EventDispatcher','jac/events/JacEvent',
 'jac/utils/EventUtils', 'jac/utils/ObjUtils', 'jac/utils/NetUtils', 'jac/net/ServiceRequest',
 'jac/net/events/ServReqEvent', 'jac/net/events/ServReqProgressEvent','jac/logger/Logger', 'jac/logger/ConsoleTarget',
 'jac/logger/VerboseLevel', 'jac/utils/StringUtils','jac/events/GlobalEventBus'],
function(doc, BaseObj, FancyObj, EventDispatcher, JacEvent, EventUtils, ObjUtils, NetUtils, ServiceRequest, ServReqEvent, ServReqProgressEvent, L, ConsoleTarget, VerboseLevel, StringUtils, GEB){

	L.addLogTarget(new ConsoleTarget());
	L.verboseFilter = (VerboseLevel.ALL);

	L.log('--------- Logger Examples --------');
	L.log('Test Log','more stuff');

	function testLog($myMessage){
		L.log($myMessage);
	}

	testLog('Sweet Test Message');

	L.warn('Awesome Test Warning');
	L.error('Awesome Test Error');
	//L.error('Awesome Test Exception', true); //uncomment to throw exception

	L.addTag('@sweetTag');
	L.isTagFilterEnabled = true;
	L.isShowingUnTagged = false;

	L.log('This will show because of the tag', 'and more stuff', '@sweetTag');
	L.log('This will NOT show because it is not tagged');
	L.log('This will NOT show because it\'s tag is not in the list', '@boringTag');

	L.isShowingUnTagged = true;
	L.log('This will now show because showingUnTagged has been turned on');
	L.isTagFilterEnabled = false;
	L.log('This will now show because tag filtering has been turned off.', '@yetAnotherTag');

	L.isStringFilterEnabled = true;
	L.addStringFilter('findme');

	L.log('This will show because of findme');
	L.log('This will not show because it doesn\'t match any of the string filters');

	L.isStringFilterEnabled = false;

	L.log('---------------------------------------');

	L.log('\n\n--------- Global Event Bus (Singleton) Examples --------');
	var geb = new GEB();
	var geb2 = new GEB();
	L.log('These should be the same instance: ' + (geb === geb2));

	geb.addHandler('gebTest', function($e){L.log('Caught GEB Test');});
	geb2.dispatchEvent(new JacEvent('gebTest'));

	L.log('---------------------------------------');

	L.log('\n\n--------- Inheritance Examples --------');
	var obj = new BaseObj('test name1', 'things1');
	var obj2 = new BaseObj('test name2', 'things2');

	L.log(obj);
	obj.sayName();

	L.log('Private: ' + obj.getPrivateMessage());
	L.log('Private2: ' + obj2.getPrivateMessage());

	var fancyObj1 = new FancyObj(5, 'Fancy1', 'Fancy Private 1');
	var fancyObj2 = new FancyObj(6, 'Fancy2', 'Fancy Private 2');

	L.log('Fancy Obj Say Name Override:');
	fancyObj2.sayName();

	L.log('Fancy1: ' + fancyObj1.getNum() + ' / ' + fancyObj1.getPrivateMessage());
	L.log('Fancy2: ' + fancyObj2.getNum() + ' / ' + fancyObj2.getPrivateMessage());

	L.log('Fancy 1 Instance of FancyObj/BaseObj: ' + (fancyObj1 instanceof FancyObj) + ' / ' + (fancyObj1 instanceof BaseObj));
	L.log('Type of Fancy2: ' + (typeof fancyObj2));
	L.log('FancyObj isPrototypeOf Fancy2: ' + (FancyObj.prototype.isPrototypeOf(fancyObj2)));
	L.log('BaseObj isPrototypeOf Fancy2: ' + (BaseObj.prototype.isPrototypeOf(fancyObj2)));
	L.log('---------------------------------------');

	L.log('Fancy Same Proto: ' + (fancyObj1.prototype == fancyObj2.prototype));
	L.log('Fancy and Base Same Proto: ' + (fancyObj1.prototype == obj2));



	L.log('\n\n--------- Event Examples --------');
	var ed = new EventDispatcher();
	var testDelegate = EventUtils.bind(this, handleTestEvent);
	ed.addHandler('testEvent', testDelegate);

	L.log('Dispatching Test Event');
	ed.dispatchEvent(new JacEvent('testEvent', {stuff:'things!'}));

	function handleTestEvent($e){
		L.log('Caught Test Event: ');
		L.log($e.target);
	}

	L.log('Removing Test Listener');
	ed.removeHandler('testEvent', testDelegate);

	L.log('This dispatch should not get caught (was just removed)');
	ed.dispatchEvent(new JacEvent('testEvent', {stuff:'things1!'}));
	L.log('---------------------------------------');




	L.log('\n\n--------- Array Detection Examples --------');
	var testArray = [];
	L.log('Is Array: ' + ObjUtils.isArray(testArray));
	L.log('Is Array: '+  ObjUtils.isArray({}));
	L.log('---------------------------------------');


	L.log('\n\n--------- String Utils Examples --------');
	var testSeconds = 122;
	L.log('Formatted Time: ' + StringUtils.formatSecondsToHMS(testSeconds,':'));
	L.log(StringUtils.stripNewLines('Too\r\nMany\rLines\n'));
	L.log(StringUtils.stripWhiteSpace('  Look   a  t  al    l \r of \r\n th\nose   spaces    '));
	L.log(StringUtils.stripSurroundingWhiteSpace('  \r\nSpaces in front, middle and back!   \r\n'));
	L.log(StringUtils.formatNumWithDelim(234));
	L.log(StringUtils.formatNumWithDelim(234.0));
	L.log(StringUtils.formatNumWithDelim(11231234));
	L.log(StringUtils.formatNumWithDelim(1234.12567));
	L.log(StringUtils.formatNumWithDelim(-1234));
	L.log(StringUtils.formatNumWithDelim(-1234.9967));

	L.log('---------------------------------------');

	L.log('\n\n--------- Service Request Examples --------');
	var serviceReq = new ServiceRequest(window.location.host,
										'/jaclib/src/backend/proc.php',
										{
											actionID:'1234',
											action:'testaction',
											data:'sweet test data'
										},
										'POST');

	var webReqDelegate = EventUtils.bind(this, handleWebReqComplete);
	var reqProgressDelegate = EventUtils.bind(this, handleWebReqProgress);
	serviceReq.addHandler(ServReqEvent.COMPLETE, webReqDelegate);
	serviceReq.addHandler(ServReqProgressEvent.PROGRESS, reqProgressDelegate);
	serviceReq.send();

	/**
	 * @param {ServReqEvent} $e
	 */
	function handleWebReqComplete($e){
		L.log('Web Req Complete: ' + $e.status);
		L.log('Was Request Success: ' + $e.isSuccess);
		L.log('Req Result: ' + $e.response);
	}

	/**
	 * @param {ServReqProgressEvent} $e
	 */
	function handleWebReqProgress($e){
		L.log('Progress: ' + $e.position + ' / ' + $e.totalSize);
	}

	L.log('---------------------------------------');


});