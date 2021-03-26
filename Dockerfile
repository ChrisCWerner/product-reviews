FROM node:lts-alpine as build

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .

RUN yarn build

FROM nginx:1.19.1-alpine as web-server
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
