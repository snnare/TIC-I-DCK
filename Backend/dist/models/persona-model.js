"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../connectionDB/connectionDB"));
const Alumno = connectionDB_1.default.define('Alumno', {
    num_cuenta: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    correo_institucional: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false // Puede ser null si no se proporciona
    },
    activo: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    createdAt: false, // renombrar el campo predeterminado de createdAt
    updatedAt: false // deshabilitar la actualización automática del campo updatedAt
});
exports.default = Alumno;
