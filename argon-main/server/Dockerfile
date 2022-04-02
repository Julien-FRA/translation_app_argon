FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./package.json .

RUN apk --no-cache add curl

RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | sh

RUN yarn

COPY . .

EXPOSE 8000

CMD [ "yarn", "start" ]
