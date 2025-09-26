# Introduction

Just a hodgepodge, what do you expect?

## Docker

- `docker build -t cloud-console:$(git rev-parse --short=8 HEAD) .`

- `docker run --net host --name cloud-console --env-file ./.env cloud-console:$(git rev-parse --short=8 HEAD)`
