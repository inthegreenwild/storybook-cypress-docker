FROM cypress/base:10
WORKDIR /app

# dependencies will be installed only if the package files change
COPY package*.json .

ENV CI=1
RUN npm ci

# verify that Cypress has been installed correctly.
RUN npx cypress verify
