CREATE DATABASE IF NOT EXISTS dbcontrolescolar;
USE dbcontrolescolar;

CREATE TABLE Alumnos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    num_cuenta INT NOT NULL,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    fecha_nacimiento DATE,
    correo_institucional VARCHAR(100),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT true
);


INSERT INTO Alumnos (num_cuenta, nombre, apellido, fecha_nacimiento, correo_institucional)
VALUES 
(1001, 'juan', 'garcía', '2000-05-15', 'juan.garcia@example.com'),
(1002, 'maría', 'lópez', '2001-03-20', 'maria.lopez@example.com'),
(1003, 'carlos', 'martínez', '1999-11-10', 'carlos.martinez@example.com'),
(1004, 'laura', 'fernández', '1998-09-25', 'laura.fernandez@example.com'),
(1005, 'pedro', 'gómez', '2002-07-18', 'pedro.gomez@example.com'),
(1006, 'ana', 'pérez', '2003-01-30', 'ana.perez@example.com'),
(1007, 'javier', 'sánchez', '2000-12-05', 'javier.sanchez@example.com'),
(1008, 'sara', 'gutiérrez', '1999-08-22', 'sara.gutierrez@example.com'),
(1009, 'diego', 'rodríguez', '2001-06-17', 'diego.rodriguez@example.com'),
(1010, 'elena', 'díaz', '1998-04-12', 'elena.diaz@example.com'),
(1011, 'alejandro', 'ruiz', '2002-10-08', 'alejandro.ruiz@example.com'),
(1012, 'lucía', 'hernández', '2003-02-28', 'lucia.hernandez@example.com'),
(1013, 'manuel', 'torres', '1999-07-03', 'manuel.torres@example.com'),
(1014, 'carmen', 'navarro', '2000-09-14', 'carmen.navarro@example.com'),
(1015, 'luis', 'santos', '2001-11-19', 'luis.santos@example.com'),
(1016, 'marta', 'jiménez', '1998-01-24', 'marta.jimenez@example.com'),
(1017, 'pablo', 'morales', '2003-06-07', 'pablo.morales@example.com'),
(1018, 'natalia', 'iglesias', '2002-04-03', 'natalia.iglesias@example.com'),
(1019, 'mario', 'ortega', '1999-10-11', 'mario.ortega@example.com'),
(1020, 'isabel', 'serrano', '2000-08-29', 'isabel.serrano@example.com');


