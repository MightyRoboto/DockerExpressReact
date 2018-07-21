FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm run build

FROM node:alpine AS release
WORKDIR /app
COPY --from=build ./app/build .
COPY --from=build ./app/server .

RUN npm i -s express

ENTRYPOINT ["node", "server.js"]