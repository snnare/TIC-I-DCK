# Stage 1
FROM node:18.16.1-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

# Stage 2
FROM nginx:stable
COPY default.conf /etc/nginx/conf.d
COPY --from=build /app/dist/frontend/ /usr/share/nginx/html
EXPOSE 80
