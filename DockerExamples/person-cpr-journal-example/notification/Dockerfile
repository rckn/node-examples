#Based on - https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:boron
#Create a directory on target server
WORKDIR /usr/src/app

#Copy specific file to the current directory:  /usr/src/app
COPY package.json .
COPY package-lock.json .

#Install all npm modules from the package.json file
RUN npm install

#Copy all files from current directoy to the current directory: /usr/src/app on server
COPY . . 

#Define what port to expose. The same port as in your app.js...
EXPOSE 3000

# Run the npm start command on image:
# Could also run builds... CMD [ "npm", "build"]
CMD [ "npm", "start" ]