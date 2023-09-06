# s3rver-docker

Docker image based on [s3rver](https://github.com/jamhall/s3rver) node package.

The aim of this project is to provide a lightweight Docker image for local S3 development.
That's why it's not support all s3rver granular configuration options.
Usually you need to specify only the list of buckets that will be created on startup and than you can use it for integration or e2e tests.

By default s3rver assumes that it started on `localhost:4569` and all buckets will be created with vhost-style access.
So you should assume that for the client configuration. See s3rver documentation for more details.


## Options

There are some options that you can pass to container via environment variables.

Container does not have any required options and will work with default values.

However, usually you need to specify at least `BUCKETS` option.

All bucket data will be stored in `/tmp/s3rver` directory inside container.

### Optional

- `BUCKETS` - comma separated list of buckets that service will create on startup
- `RESET_ON_CLOSE` - (`false` by default) remove all bucket data on server close
- `PORT` - (`4569` by default) port to listen
- `HOST` - (`localhost` by default) host to listen
- `VHOST_BUCKETS` - (`true` by default) disable vhost-style access for all buckets

> **Note:** You can pass boolean values as `false` or `true` strings or as `0` or `1`, `no` or `yes` strings.

## Usage

To get the latest container version run:
```shell
docker pull ghcr.io/clockwisesoftware/s3rver:latest
```
than you can run it with `docker run` command or use `docker-compose` file.

### Docker run

```shell
docker run -p 4569:4569 -e BUCKETS=users-profiles-pics,uploads ghcr.io/clockwisesoftware/s3rver:latest
```

### Docker Compose

```yaml
version: '3.1'
services:
  s3-local:
    image: ghcr.io/clockwisesoftware/s3rver:latest
    ports:
      - "4569:4569"
    environment:
      - "BUCKETS=users-profiles-pics,uploads"
      - "RESET_ON_CLOSE=0"
```
- `BUCKETS` - comma separated list of buckets that service will create on startup
- `RESET_ON_CLOSE` - remove all bucket data on server close


