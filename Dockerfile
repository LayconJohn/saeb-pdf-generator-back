FROM node:16-alpine as builder

WORKDIR /usr/src/

COPY . /usr/src/

EXPOSE 5000

RUN npm i

CMD ["npm", "run", "start:dev"]