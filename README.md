# POC

A vue app with storybook that's tested using cypress within docker. 

> TODO: run against built storybook 
> TODO: implement visual regression tests with Cypress 

## Usage

Cypress tests are found under `e2e/cypress/integration`

### Dockerized run

Cypress results will be saved to local disk under `e2e/cypress`

- `npm run docker:build`
- `npm run up`

### local run 

- start the dev server in `app` with `npm run storybook`
- run cypress in `e2e` by moving into the directory and running `npx cypress verify && npx cypress run`



