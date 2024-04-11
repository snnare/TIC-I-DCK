FROM node:alpine as build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install --production

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Instala TypeScript de forma global y compila la aplicación
RUN npm install -g typescript

# Expone el puerto en el que la aplicación se ejecutará 
EXPOSE 4000

# Comando para iniciar el servidor
CMD ["node", "dist/index.js"]
