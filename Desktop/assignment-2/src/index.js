const express = require('express');
var bodyParser = require('body-parser');

const route = require('../src/routes/route');

const app = express();
// new Date().toString().replace(/T/, ':').replace(/\.\w*/, '');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});