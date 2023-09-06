# s3rver-docker

Docker image based on [s3rver](https://github.com/jamhall/s3rver) node package.
So you can look there at client configuration and usage samples.

To get the latest container version run:
```shell
docker pull ghcr.io/clockwisesoftware/s3rver:latest
```

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

See docker-compose.yml for run sample.
You can definitely need to customize `environment` section
```yaml
environment:
      - "BUCKETS=users-profiles-pics,uploads"
      - "RESET_ON_CLOSE=0"
```
- `BUCKETS` - comma separated list of buckets that service will create on startup
- `RESET_ON_CLOSE` - remove all bucket data on server close


