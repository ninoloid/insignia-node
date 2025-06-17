FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# uncomment this if you want to run directly by dockerfile
# CMD ["npm", "start"]