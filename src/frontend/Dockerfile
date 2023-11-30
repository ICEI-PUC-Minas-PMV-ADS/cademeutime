FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Copy SSL certificates to the container
COPY server.cert server.cert
COPY server.key server.key

CMD ["npm", "start"]