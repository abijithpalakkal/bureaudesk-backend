FROM node:18-alpine AS build

RUN apk add --no-cache make gcc g++ python3

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install typescript -g

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ] 