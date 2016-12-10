/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */

define([
'libs/domReady!',
'jac/logger/Logger',
'jac/logger/ConsoleTarget',
'app/IFaceBaseObj',
'app/IFace',
'jac/utils/InterfaceUtils',
'app/FancyIFaceBaseObj',
'app/IFaceOther',
'app/DeluxeFancyIFaceBaseObj'],
function(doc, L, ConsoleTarget, IFaceBaseObj, IFace, InterfaceUtils, FancyIFaceBaseObj, IFaceOther, DeluxeFancyIFaceBaseObj){
	L.addLogTarget(new ConsoleTarget());

	L.log('IFACE!');

	var testObj = new IFaceBaseObj();
	testObj.init('test');
	testObj.destroy();

	var result = InterfaceUtils.classImplements(IFaceBaseObj, IFace);
	L.log('classImplements: ' + result);

	var fancyObj = new FancyIFaceBaseObj();
	result = InterfaceUtils.classImplements(FancyIFaceBaseObj, IFace);
	L.log('fancy classImplements: ' + result);

	result = InterfaceUtils.classImplements(FancyIFaceBaseObj, IFace, IFaceOther);
	L.log('fancy other classImplements (this should fail): ' + result);

	result = InterfaceUtils.classImplements(DeluxeFancyIFaceBaseObj, IFace);
	L.log('deluxe fancy classImplements: ' + result);

	result = InterfaceUtils.objectImplements(fancyObj, IFace);
	L.log('face OBJECT objectImplements: ' + result);

	result = InterfaceUtils.objectImplements(fancyObj, IFace, IFaceOther);
	L.log('face OBJECT objectImplements (should fail): ' + result);
});
