FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN ./node_modules/.bin/prisma generate

COPY . .

CMD ["npm", "start"]