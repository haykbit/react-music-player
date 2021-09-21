const express = require('express');
const app = express();

app.use(express.json());

//Import all routers

const users = require('./routes/user')

app.use('/api/v1',users)


module.exports = app
