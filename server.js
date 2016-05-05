var PORT = process.env.PORT || 3000;
var express = requre('express');
var app = express();
var http = requre('http').Server(app);

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function() {
	console.log('Listen: ' + PORT);
});