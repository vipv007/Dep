# Use the official Node image as the base image
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the entire project to the working directory
COPY . .

# Build the Angular app for production
RUN npm run build -- --prod

# Use Nginx as the web server to serve the Angular app
FROM nginx:alpine

# Copy the built Angular app from the previous stage to the nginx directory
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
