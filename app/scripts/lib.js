/*jslint browser: true, nomen:true*/
/*global alert*/

(function (wynndow) {
	'use strict';
	alert("Confirmation that wynn.js had loaded!");
	
	return {
		recursive: function (callback, condition) {
			//Commenting this out for performance.
			//callback(condition);
			return true; //This is like 1000 times faster:wq
		}
	};
}(window));