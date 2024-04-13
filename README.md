<div align="center">
  <h1>
    <br/>
    <br/>
    ⏱️
    <br />
    instanticon.app
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    <br />
    <br />
    A quick and easy icon generator.
    <br />
  </sup>
  <br />
  <br />
  <br />
  <br />
  <pre><a href="https://instanticon.app">instanticon.app</a></pre>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

## What?

This project will generate PNG and SVGs that can be used as app icons or favicons. This project was thrown together in a few days and *heavily* inspired by [logofa.st](https://logofa.st/). 

## Get Started

Clone the repo:

```
git clone https://github.com/zepez/instanticon.app.git
```

Get the correct node version:

```
nvm use
```

Install dependencies: 

```
pnpm install
```

Start the development server: 

```
pnpm dev
```

## All Commands

| Command          | Action                                               |
|------------------|------------------------------------------------------|
| nvm use          | Uses NVM to load the correct node version            |
| pnpm install     | Install dependencies                                 |
| pnpm commit      | Run gitmoji cli                                      |
| pnpm lint        | Run eslint in all packages                           |
| pnpm clean       | Remove build artifacts                               |
| pnpm build       | Build production Next.js site                        |
| pnpm dev         | Start Next.js development server on `localhost:3000` |
| pnpm start       | Start production Next.js server                      |
| pnpm clean-turbo | Remove turbo cache files                             |