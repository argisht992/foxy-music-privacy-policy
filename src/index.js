const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/../public/privacy_policy.txt'));
});


app.use('/static', express.static(path.join(__dirname, '../public')));

app.listen(process.env.PORT || '8888');
