FROM node:12-alpine

RUN apk update \
&& apk add ca-certificates \
&& apk upgrade \
&& apk add bash \
&& apk add curl \
&& apk add dos2unix \
&& rm -rf /var/cache/apk/*

# Replace default shell from ash to bash
RUN sed -r -i 's/(root:.*:root:\/root:\/bin\/)(.*)/\1bash/g' /etc/passwd

COPY wait-for-it.sh /wait-for-it.sh
# for windows CRLF
RUN dos2unix /wait-for-it.sh && chmod +x /wait-for-it.sh

ENV NODE_ENV $NODE_ENV

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
