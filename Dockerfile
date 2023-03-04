FROM node:lts as dependencies

WORKDIR /redprod

COPY package.json yarn.lock ./
RUN yarn install

FROM node:lts as builder
WORKDIR /redprod
COPY . .
COPY --from=dependencies /redprod/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /redprod

ENV NODE_ENV production

COPY --from=builder /redprod/public ./public
COPY --from=builder /redprod/package.json ./package.json
COPY --from=builder /redprod/.next ./.next
COPY --from=builder /redprod/node_modules ./node_modules

CMD ["yarn", "start"]