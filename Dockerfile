FROM node:latest

WORKDIR /app

EXPOSE 5000

COPY package*.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]