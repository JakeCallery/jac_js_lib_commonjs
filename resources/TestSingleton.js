/**
 * Created with JetBrains PhpStorm.
 * User: Jake
 */

define([],
function(){
	return (function(){
		/**
		 * Creates a TestSingleton Singleton object
		 * to use ALWAYS new it up mySingleton = new TestSingleton()
		 * @constructor
		 */
		function TestSingleton(){
			if(TestSingleton.prototype._singletonInstance){
				return TestSingleton.prototype._singletonInstance;
			}

			//Make new instance
			TestSingleton.prototype._singletonInstance = this;
		}

		//Return constructor
		return TestSingleton;
	})();
});
