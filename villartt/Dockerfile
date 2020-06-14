FROM strapi/base

WORKDIR ./strapi-dashboard

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

RUN npm run build

#Suggested into Docker container and then with NGINX listen 3000 
EXPOSE 1337

CMD ["npm", "start"]

