FROM node:20-alpine AS base

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package.json ./
RUN npm install --production=false

COPY . .

RUN npm run build

FROM node:20-alpine AS production

WORKDIR /app

COPY package.json ./
RUN npm install --production

COPY --from=base /app/dist ./dist
COPY --from=base /app/medusa-config.ts ./

EXPOSE 9000

CMD ["npm", "start"]
