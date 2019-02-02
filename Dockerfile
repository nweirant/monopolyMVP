FROM node:8
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV MONGO_URI=mongodb://nweirandb:talal123@ds161495.mlab.com:61495/monopoly
COPY . .
EXPOSE 3000
EXPOSE 27017
CMD ["npm", "start"]
