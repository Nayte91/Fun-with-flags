ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine as build
WORKDIR /app
COPY . ./
RUN npm ci --only=production
RUN npm run build

FROM caddy:alpine as release
COPY --from=build /app/build /srv