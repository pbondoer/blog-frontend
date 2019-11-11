# 📚 `blog-frontend`

> This project is still under development.

This is the source code to my (upcoming) blog.

## Minimum Viable Product

Also known as, what it should do as it's core functionality.

- As an user
  - List of articles in chronological order
  - Article view with sticky table of contents
  - Previous and next article links

## Technical goals

- 🗜️ Minimal bundle size for quick loading
- 🔎 Server-side rendering for SEO
- 📝 Server-rendered markdown articles

## Architecture goals

I'm kind of using this project as my playground to try out new stuff. As such
the following may change, but for now I think I've settled on these points:

- ⚛ [Preact](https://github.com/preactjs/preact/) front-end

  - 🔎 Written in [TypeScript](https://github.com/microsoft/TypeScript)
  - 📦 Bundled with [Parcel](https://github.com/parcel-bundler/parcel)
  - 🃏 Unit and functional tests with [Jest](https://github.com/facebook/jest)
  - 🦉 End-to-end tests with
    [Nightwatch](https://github.com/nightwatchjs/nightwatch)

- 🚀 [Rocket](https://github.com/SergioBenitez/Rocket) back-end
  - 🔎 Written in [Rust](https://github.com/rust-lang/rust)
  - ☄️ GraphQL using [Juniper](https://github.com/graphql-rust/juniper)
  - ⛽ ORM provided by [Diesel](https://github.com/diesel-rs/diesel)

It will be interesting to see how much my objectives change over time,
especially as I start implementing features and my requirements evolve.

## Running

- `yarn`
  - Install dependencies
- `yarn start`
  - Start a development server with hot module replacement

## License

Licensed under the MIT license. See `LICENSE` for details.
