# Use an official Node.js runtime as the base image for the build stage
FROM node:16 as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json from the CeleSmart app directory to the container
COPY ./CeleSmart/package*.json ./CeleSmart/

# Install app dependencies for CeleSmart
RUN cd CeleSmart && npm install && npm install -g ionic

# Copy the rest of the CeleSmart application code to the working directory
COPY ./CeleSmart .

# Build the CeleSmart Ionic app
RUN ionic build

# Clear the working directory
WORKDIR /app

# Copy the package.json and package-lock.json from the sericulture app directory to the container
COPY ./sericulture/package*.json ./sericulture/

# Install app dependencies for sericulture
RUN cd sericulture && npm install && npm install -g @angular/cli

# Copy the rest of the sericulture application code to the working directory
COPY ./sericulture .

# Build the sericulture Angular app
RUN ng build --prod

# Expose the port that the apps will run on (if necessary)
EXPOSE 4200

# Use the CMD instruction to specify the command to run when starting the container
CMD ["npm", "start", "--host=0.0.0.0", "--disable-host-check"]
