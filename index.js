const express = require('express')
const app = express()


app.get('/', function(req, res) {
    res.send('<html><body><h1>hello world</h1></body></html>');
});

app.listen(8000, () => { console.log("server is running on port 8000...") })