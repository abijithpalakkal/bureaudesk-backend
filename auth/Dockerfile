FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install typescript -g

RUN npm run build

EXPOSE 3001

CMD [ "npm", "start" ] 