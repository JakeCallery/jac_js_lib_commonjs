/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 * Date: 4/19/13
 * Time: 5:10 PM
 * To change this template use File | Settings | File Templates.
 */
require([
'libs/domReady!',
'jac/webCam/WebCam',
'jac/webCam/events/WebCamEvent',
'jac/logger/ConsoleTarget',
'jac/logger/Logger',
'jac/utils/EventUtils'],
function(doc, WebCam, WebCamEvent, ConsoleTarget, Logger, EventUtils){
	console.log('Main!');

	if(WebCam.checkSupport(navigator, window) === true){

		var webCam = new WebCam(doc,navigator,window, doc.getElementById('camvideo'));
		webCam.addHandler(WebCamEvent.STREAM_ENDED, handleStreamEnded);
		webCam.addHandler(WebCamEvent.CONNECT_SUCCESS, handleConnectSuccess);
		webCam.addHandler(WebCamEvent.CONNECT_FAIL, handleConnectFail);
		webCam.init(true, true);

		var stopButton = doc.getElementById('stopButtonEl');
		var startButton = doc.getElementById('startButtonEl');
		stopButton.disabled = true;
		startButton.disabled = true;

		EventUtils.addDomListener(stopButton,'click', handleStopClick);
		EventUtils.addDomListener(startButton,'click', handleStartClick);
	} else {
		var el = doc.getElementById('errorPEl');
		el.innerHTML = 'Web Cam not supported in browser';
	}


	function handleStopClick ($e){
		webCam.stop();
	}

	function handleStartClick($e){
		webCam.init(true,true);
	}

	function handleStreamEnded($e){
		startButton.disabled = false;
		stopButton.disabled = true;
	}

	function handleConnectSuccess($e){
		startButton.disabled = true;
		stopButton.disabled = false;
	}

	function handleConnectFail($e){
		startButton.disabled = false;
	}

});