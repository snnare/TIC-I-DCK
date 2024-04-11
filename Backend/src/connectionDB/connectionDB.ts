import { Sequelize } from "sequelize";


const sequelize = new Sequelize('dbcontrolescolar', 'root', '1212', {
        host: 'mysql',
        port: 3306,
        dialect: 'mysql'
});


export default sequelize;