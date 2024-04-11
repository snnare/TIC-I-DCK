import { DataTypes } from 'sequelize';
import db from '../connectionDB/connectionDB';

const Alumno = db.define('Alumno', {
    num_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    correo_institucional: {
        type: DataTypes.STRING,
        allowNull: false // Puede ser null si no se proporciona
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    createdAt: false, // renombrar el campo predeterminado de createdAt
    updatedAt: false // deshabilitar la actualización automática del campo updatedAt
});

export default Alumno;
