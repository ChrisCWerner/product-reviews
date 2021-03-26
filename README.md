# Product Reviews

> Small project for Opinew's technical test.

## Description

As per the technical interview with Opinew, here is a simple Vuejs application to showcase a bit of my understanding with frontend development.

The system should consist basically in a detailed products list page with product name, description, image, price, reviews and other metadata.

## Project setup

First of all, make sure you have the code cloned from this repository. Every command stated in here is supposed to run on the root of the cloned repository directory.

For simplification, I've added the [`json-server`](https://github.com/typicode/json-server) dependency inside `package.json` as a dev dependency. The recommended approach is to create a separate project to handle backend services.

```bash
# To install all dependencies:
yarn
```

### Run locally
```bash
# To start up the server, run this in the terminal:
yarn server

# To start up the frontend, run this in a separate terminal:
yarn dev
```

Now you should be able to access the web client by going to localhost:8080 in your browser.

### Running with Docker/Docker-compose

You can also run this project with Docker, skipping the dependency installation step. Simply run the following commands:

```bash
# build the client and server images
docker-compose build

# start up the client and server
docker-compose up
```

The client should be running in the docker host at port 80 (default http port). Due to poor NginX configuration, the routing only works by accessing the root path "/". From there the SPA should do the rest.

### Lints and fixes files
```bash
yarn lint
```
