const {USER_REGISTRATION_MODEL} = require("./model/user-model/user-registration-model" );

const sequelize = require('../configuration/connect-db' );

const db = {};


db.sequelize = sequelize;

module.exports = db;