# Introduction

Hodgepodge

* `docker run --name hodgepodge-db -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:17.6`

* `pnpm db:push`

* `pnpm dev`

## Docker

* `docker build -t codev-admin:$(git rev-parse --short=8 HEAD) .`

* `docker run --net host --name codev-admin --env-file ./.env codev-admin:$(git rev-parse --short=8 HEAD)`

