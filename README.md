# Introduction

CoDev Admin Page

Run `pnpm db:push` to push schema to database before `pnpm dev`.

## Node.js version manager

* Disable Git SSL: `git config --global http.sslVerify "false"`

* Install nvm: `curl -k -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`

* Install and use a Node.js version: `nvm install 22`

* Switch version: `nvm use 22`

* Set default version: `nvm alias default 22`

* Check current Node.js version with `node -v`

* Check downloaded version list including the default Node.js version: `nvm ls`

* Check remote Node.js versions: `nvm ls-remote`

* See https://github.com/nvm-sh/nvm for the latest nvm version.

## Package manager

* Install or update `pnpm`: `npm i -g pnpm`

* Install all dependencies in `package.json`: `pnpm i`

* Add new dependencies or dev dependencies: `pnpm add` or `pnpm add -D`

* Remove dependencies or dev dependencies: `pnpm rm` or `pnpm rm -D`

* See https://pnpm.io for more details.

## Playwright E2E testing

* Run `npx playwright install --with-deps firefox` to install Firefox with system deps

* To run Playwright in VS Code (Testing section in the sidebar), you need to install VS Code Playwright extension

* Alternatively, you can use command `pnpm test:e2e` in terminal instead (e.g., for CI)

* To pick locator or record, run `pnpm dev` first

## Docker

* `docker build -t codev-admin:$(git rev-parse --short=8 HEAD) .`

* `docker run --net host --name codev-admin --env-file ./.env codev-admin:$(git rev-parse --short=8 HEAD)`

