FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

# Use npm modules with binaries
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
