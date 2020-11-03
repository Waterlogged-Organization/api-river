FROM node:10.23-alpine

COPY . /server/

WORKDIR /server

RUN npm update && npm install

CMD npm start

EXPOSE 8082
