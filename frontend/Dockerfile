FROM node:16 AS development

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

# Use npm modules with binaries
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]

FROM development AS builder

RUN yarn build

FROM nginx:1.21-alpine AS production

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
