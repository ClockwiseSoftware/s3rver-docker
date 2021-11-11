FROM node:14

RUN useradd -ms /bin/bash s3rver

RUN mkdir /tmp/s3rver
RUN chown s3rver /tmp/s3rver

RUN mkdir /app
COPY ./server.js /app
RUN chown -R s3rver /app
# Install Dependencies
RUN npm install s3rver

WORKDIR /app

ENV HOST=0.0.0.0

# Expose container port
EXPOSE 4569

USER s3rver

# Map serverless offline to docker container sls offline local-authorizers --stage=test --region=localhost
CMD ["node", "server.js"]
