FROM node:24

WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 4500

CMD [ "node", "index.js" ]