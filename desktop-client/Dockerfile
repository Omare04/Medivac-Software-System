#dev stage
FROM node:alpine AS builder
WORKDIR '/desktop-client'

COPY ./package.json ./
RUN npm install 
COPY . . 
EXPOSE 80

#Production stage 
FROM nginx:alpine 
COPY --from=builder /desktop-client/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]