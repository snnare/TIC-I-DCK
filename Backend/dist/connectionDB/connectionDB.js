"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('dbcontrolescolar', 'root', '1212', {
    host: 'mysql',
    port: 3306,
    dialect: 'mysql'
});
exports.default = sequelize;
