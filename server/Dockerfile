FROM node:22-alpine as dev

WORKDIR /app/server

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "yarn", "run", "start:dev" ]


FROM node:22-alpine as prod

WORKDIR /app/server

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5000


CMD [ "yarn", "run", "start:prod" ]
