var application = require('app'),
	BrowserWindow = require('browser-window');
application.on('ready', function () {
	var mainWindow = new BrowserWindow({
		width: 650,
		height: 450,
		frame:false,
		'min-width': 500,
		'min-height': 200,
		'accept-first-mouse': true,
		'title-bar-style': 'hidden'
	});
	mainWindow.loadUrl('file://' + __dirname + '/index.html');
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
});