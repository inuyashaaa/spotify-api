FROM node

RUN apt-get update
RUN mkdir -p /spotify
WORKDIR /spotify
COPY package.json /spotify
RUN npm install
COPY . /spotify
CMD ["node", "index.js"]
EXPOSE 3000
