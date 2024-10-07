# base image 
FROM node:20.16.0-alpine3.20

# working directory
WORKDIR /app 

# copy content to the working directory
COPY . . 

#  install dependencies
RUN npm install 

# expose port 
EXPOSE 3000

# server start
CMD node server.js

