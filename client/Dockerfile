FROM node

WORKDIR /app/client

EXPOSE 3000

COPY package*.json /app/client

RUN npm install

COPY . /app/client

RUN npm run build

CMD [ "npm", "start" ]
