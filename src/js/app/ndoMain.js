/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */

define(['libs/domReady!', 'jac/model/NotifyingDataObject', 'jac/utils/EventUtils', 'jac/events/GLobalEventBus'],
function(doc, NDO, EventUtils, GlobalEventBus){
	var ndo = new NDO();

	ndo.addHandler('testDataChanged', function($e){
		console.log('Test Data Changed: ' + $e.data);
	});

	ndo.addHandler('testDataAdded', function($e){
		console.log('Test Data Added: ' + $e.data);
	});

	ndo.addHandler('testDataRemoved', function($e){
		console.log('Test Data Removed');
	});

	var geb = new GlobalEventBus();
	geb.addHandler('testDataChanged', function($e){
		console.log('Caught Data Changed on GEB: ' + $e.data);
	});

	ndo.addDispatcher(geb);

	ndo.addData('testData', 5);
	console.log('Data: ' + ndo.getData('testData'));

	ndo.setData('testData', 10);
	console.log('New Data: ' + ndo.getData('testData'));

	console.log('Removing GEB dispatcher from list, it shouldn\'t catch the next data change');
	ndo.removeDispatcher(geb);
	ndo.setData('testData', 'this is neat!');

	ndo.removeData('testData');
	console.log('Missing Data: ' + ndo.getData('testData'))


});
