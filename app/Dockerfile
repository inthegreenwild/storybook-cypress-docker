FROM node:16.0.0
EXPOSE 5000
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .
RUN npm run build
CMD ["npm", "run", "storybook"]
