# s3rver-docker

Docker image based on [s3rver](https://github.com/jamhall/s3rver) node package.
So you can look there at client configuration and usage samples.

To get the latest container version run:
```shell
docker pull ghcr.io/omvmike/s3rver:latest
```

See docker-compose.yml for run sample.
You can definitely need to customize `environment` section
```yaml
environment:
      - "BUCKETS=users-profiles-pics,uploads"
      - "RESET_ON_CLOSE=0"
```
- `BUCKETS` - comma separated list of buckets that service will create on startup
- `RESET_ON_CLOSE` - remove all bucket data on server close


