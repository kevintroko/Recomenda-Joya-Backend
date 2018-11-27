require('dotenv').load();
const express = require('express');
const config = require('./config');
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const app = new express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(routes);

const server = app.listen(config.port);
const host = server.address().address;
const port = server.address().port;


console.log(`Server running at http://${host}:${port}`);
