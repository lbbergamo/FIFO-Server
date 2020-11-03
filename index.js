const app = require('express')();
const consign = require('consign');
const db = require('./src/database/db');

app.db = db

consign()
    .then('./src/models/middlewares.js')
    .then('./src/models/validation.js')
    .then('./src/models')
    .then('./src/controllers')
    .then('./src/routes')
    .into(app)

app.listen(3000, () => {
    console.log('Iniciou o projeto')
})
