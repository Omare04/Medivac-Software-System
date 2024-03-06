# Dev Stage
FROM node:18-alpine AS builder
WORKDIR '/desktop-client'

COPY ./package.json ./
RUN npm install 
COPY . . 

# Build the application
RUN npm run build

# Production Stage
FROM nginx

# Copy Nginx configuration
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built files from the builder stage
COPY --from=builder /desktop-client/dist /usr/share/nginx/html

# Expose the port
EXPOSE 5173

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
