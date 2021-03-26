FROM node:lts-alpine

WORKDIR /server

RUN yarn global add json-server

COPY . .

EXPOSE 3000
CMD ["json-server", "-H", "0.0.0.0", "--watch", "./db.json"]
