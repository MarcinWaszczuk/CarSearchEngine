# Cypress framework built for recruitment assignment
This repository contains 3 simple cypress test cases suited for tivix car search engine. 
It complies of following stack:
 - Cypress v12
 - TypeScript
 - Cucumber BDD syntax support
 - Mochawesome html report generator

## Run Locally

Clone the project (first make sure you have correct repository access rights - well its public so I assure its fine by now)

```bash
  git clone git@github.com:MarcinWaszczuk/CarSearchEngine
```

Go to the project directory

```bash
  cd CarSearchEngine
```

Install dependencies

```bash
  npm install
```
After the installation is complete all the packages and dependencies should be in place. 

Next up please make sure the cypress.config.ts has correct ```baseUrl``` variable linking to the homepage of the tivix tested app.
    
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

This command will generate an HTML report within reports/ folder at the end of the test run. From here you can review the current state of application.
## Authors

- [@MarcinWaszczuk](https://www.github.com/MarcinWaszczuk)

