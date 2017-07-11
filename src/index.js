var express = require('express'),
    path = require('path'),
    app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/../public/privacy_policy.txt'));
});


app.listen(8888);
