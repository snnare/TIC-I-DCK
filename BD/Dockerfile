# Utilizamos la imagen oficial de MySQL desde Docker Hub
FROM mysql:latest

# Establecemos las variables de entorno para el usuario root y su contraseña
ENV MYSQL_ROOT_PASSWORD='1212'

# Copiamos el script SQL a la carpeta /docker-entrypoint-initdb.d/ para que se ejecute automáticamente al iniciar la base de datos
COPY init.sql /docker-entrypoint-initdb.d/

# Definimos el volumen para los respaldos
VOLUME mysqlBP-T:/var/backups/mysql

# Exponemos el puerto por defecto de MySQL (3306)
EXPOSE 3306

