FROM node:18

WORKDIR /usr/src/app

COPY . .

#RUN npm install

RUN ./node_modules/.bin/prisma generate

CMD ["npm", "start"]