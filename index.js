const express = require('express');
const sequelize = require('./infrastructure/configuration/connect-database');
const router = require('../projeto-nodejs-iblue/routes/routes')
const path = require('path');
const { USER_REGISTRATION_MODEL } = require('./infrastructure/database/model/user-model/user-registration-model');


const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

USER_REGISTRATION_MODEL.sync();

app.use(express. urlencoded());
app.use(router);

app.listen(3001, () => console.log("Server funcionando na porta 3001"))