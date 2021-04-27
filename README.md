# SPARQL Endpoint GUI

## Description

Application for executing SPARQL queries.

## Installation and Usage

- Required tools to run this project:
  - Node.js and npm to run locally on a host machine
  - Docker and Docker Compose to run locally in a container

#### Running application locally on a host machine

- Install dependencies by running `npm install`
- Run `npm start` to start local development server

#### Running application in a Docker container

- Build a Docker container using the following command:
  - `docker build -t fdk-sparql-gui .`
- Run the container using the following comand:
  - `docker run -d -p 8001:8080 -e ENV -e SPARQL_API_HOST -e USER_DEMO_LOGO fdk-sparql-gui`

#### Running application using Docker Compose

- Run the application using the following command:
  - `docker-compose up -d`

## Environment Variables

- `ENV` - Environment
  - `development`
  - `production`
- `SPARQL_API_HOST` - Host of the SPARQL API service
- `USE_DEMO_LOGO` - Use demo logo (true/false)

## Contributing

#### Branching Strategy

Whenever a new change is to be implemented, follow these steps:

- Create a new branch from the master branch
- Implement and commit changes
- Create a pull request for code review

#### Commits

This repository uses conventional commmit format. In order to commit, follow these steps:

- Stage files to be committed
- Run `npm run commit` script

Do not use `--no-verify` flag when making commits.
