FROM node:alpine
WORKDIR /frontend
COPY package*.json ./
COPY . .
RUN npm install

RUN apk --no-cache add mysql-client

ARG CACHEBUST=1
EXPOSE 6001
RUN echo 'npm start will run'
CMD ["node", "--es-module-specifier-resolution=node", "server.js"]

