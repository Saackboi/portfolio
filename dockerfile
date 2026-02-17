# --- Etapa 1: Construir la App ---
FROM node:18-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Construye para producción
RUN npm run build -- --configuration production

# --- Etapa 2: Servir con Nginx ---
FROM nginx:alpine


COPY --from=build /app/dist/Portfolio/browser /usr/share/nginx/html

# Copiamos nuestra config de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80