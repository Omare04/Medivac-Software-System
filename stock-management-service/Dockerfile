FROM node:alpine

WORKDIR '/stock-management-service' 
COPY ./package.json ./ 

RUN npm install 
COPY . . 
EXPOSE 3000
CMD ["npm", "start"]