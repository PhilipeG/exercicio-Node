const {USER_REGISTRATION_MODEL} = require("./model/user-model/user-registration-model" );

const sequelize = require('../configuration/connect-database' );

const dataBase = {};


dataBase.sequelize = sequelize;

module.exports = dataBase;