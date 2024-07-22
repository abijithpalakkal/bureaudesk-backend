FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

RUN npm install typescript -g

COPY . .

RUN npm run build

EXPOSE 3001

CMD [ "npm", "start" ] 