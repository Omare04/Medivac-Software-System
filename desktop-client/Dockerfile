# Dev Stage
FROM node:16-alpine AS builder
WORKDIR '/desktop-client'

COPY ./package.json ./
RUN npm install 
COPY . . 

# Build the application
RUN npm update
RUN npm run build

# Production Stage
FROM nginx

# Expose the port
EXPOSE 5173 

# Copy Nginx configuration
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built files from the builder stage
COPY --from=builder /desktop-client/dist /usr/share/nginx/html

