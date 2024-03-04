FROM node:18-alpine

WORKDIR '/stock-management-service' 
COPY ./package.json ./ 

RUN npm install 
COPY . . 
EXPOSE 5000
CMD ["npm", "start"]