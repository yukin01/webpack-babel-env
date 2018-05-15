FROM node:10.1.0-alpine

ENV NODE_ENV=development

RUN apk add --update --no-cache tini

WORKDIR /app

ENTRYPOINT ["tini", "--"]

CMD ["node"]