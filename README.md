## Install

```pnpm i```

## Run

```pnpm --filter front run dev```

## How to reproduce
In ```/apps/front/src/routes/[...slug]```, comment first line et uncomment second line or vice versa

Navigate on different pages and check result.

With SlugService from ```$lib```, error is 404
With SlugService from ```packages/services```, error is 500