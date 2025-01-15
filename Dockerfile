# Usa una imagen oficial de Node.js como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Compila el proyecto de Next.js
RUN npm run build

# Expone el puerto que Next.js usará
EXPOSE 3000

# Inicia el servidor de Next.js
CMD ["npx", "next", "dev"]