/// <reference path="../../typings/express/express.d.ts" />

import express = require('express');

var app = express();

app.get('/', (req, res) => res.send('Hello world!'));

var server = app.listen(1337, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening on http://%s:%s', host, port);
});