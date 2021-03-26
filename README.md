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

### Lints and fixes files
```bash
yarn lint
```
