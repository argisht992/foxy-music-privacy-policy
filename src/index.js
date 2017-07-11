var express = require('express'),
    path = require('path'),
    app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/../public/privacy_policy.txt'));
});


app.listen(process.env.PORT || '8888');
