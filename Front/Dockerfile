# Etapa de construcción
FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

#CMD [ "ng", "serve" , "--host", "0.0.0.0",  "--port", "2000"]

CMD ["ng", "serve", "--port", "2000", "--proxy-config", "proxy.conf.json"]

#CMD [ "ng", "serve" , "--host", "0.0.0.0"]
