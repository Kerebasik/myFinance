FROM node:22-alpine as dev

WORKDIR /app/server

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "yarn", "run", "dev" ]


FROM node:22-alpine as prod

WORKDIR /app/server

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 5000

CMD [ "yarn", "run", "start" ]