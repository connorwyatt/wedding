FROM --platform=linux/amd64 node:14.17.3-slim as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY .eslintrc .prettierrc next-env.d.ts next.config.js tsconfig.json ./

COPY public ./public
COPY config ./config
COPY styles ./styles
COPY components ./components
COPY pages ./pages

RUN npm run build

FROM node:14.17.3-slim

WORKDIR /app

COPY package.json package-lock.json ./

ENV NODE_ENV production
ENV PORT 80

RUN npm ci

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

EXPOSE 80

ENTRYPOINT ["npm", "start"]
