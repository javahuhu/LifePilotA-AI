FROM node:22

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 1573

CMD ["npm", "run", "dev"]