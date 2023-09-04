FROM node:18-alpine

RUN mkdir /tmp/s3rver
RUN chown node:node /tmp/s3rver

RUN mkdir /app

# Install Dependencies
RUN npm install s3rver

COPY ./server.js /app
RUN chown -R node:node /app

WORKDIR /app

ENV HOST=0.0.0.0

# Expose container port
EXPOSE 4569

USER node

# Map serverless offline to docker container sls offline local-authorizers --stage=test --region=localhost
CMD ["node", "server.js"]
