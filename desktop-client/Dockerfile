#dev stage
FROM node:alpine AS builder
WORKDIR '/desktop-client'

COPY ./package.json ./
RUN npm install 
COPY . . 

CMD ["npm", "run", "dev"]
#Production stage 

FROM nginx:alpine 
EXPOSE 5173
COPY ./nginx/default.conf /etc/ngix/conf.d/default.conf
COPY --from=builder /desktop-client/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]