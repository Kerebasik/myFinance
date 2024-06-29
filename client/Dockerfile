FROM node:22-alpine as dev

WORKDIR /app/client

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "dev" ]

FROM node:22-alpine as prod

WORKDIR /app/client

COPY package.json .
COPY yarn.lock .

RUN yarn install

RUN yarn

COPY . .

RUN yarn run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
