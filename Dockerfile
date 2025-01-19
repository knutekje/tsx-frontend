# Base image for Node.js
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all source files
COPY . .

# Build the React app
RUN npm run build

# Base image for serving the React app
FROM nginx:stable-alpine AS production

# Copy built files from the Node.js image
COPY --from=base /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
