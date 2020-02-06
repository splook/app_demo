/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ben/camba/demo/app_demo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});