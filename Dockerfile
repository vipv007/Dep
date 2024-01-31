# Stage 1: Build app1
FROM node:16 as build-app1

WORKDIR /app/app1

COPY ./sericulture/package*.json ./
RUN npm install
RUN npm install -g ionic
COPY ./sericulture/app1 .
RUN ionic build

# Stage 2: Build app2
FROM node:16 as build-app2

WORKDIR /app/app2

COPY ./celesmart/package*.json ./
RUN npm install
RUN npm install -g ionic
COPY ./celesmart/app2 .
RUN ionic build

# Stage 3: Final image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the built artifacts from the previous stages
# COPY --from=build-app1 /app/app1/dist /app/app1
# COPY --from=build-app2 /app/app2/dist /app/app2

# Expose the ports if necessary
# EXPOSE 4200
# EXPOSE 4300

# You may need to customize the CMD based on how you want to run your applications
CMD ["npm", "start", "--host=0.0.0.0", "--disable-host-check"]
