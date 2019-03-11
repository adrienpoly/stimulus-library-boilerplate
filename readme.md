<h1 align="center">Stimulus-Library-Boilerplate</h1>

<p align="center">
  <b>A simple boilerplate to publish standard Stimulus Controller as an NPM package</b></br>
</p>

<br />

- **Rollup**: Roll up configuration to build umd, es, cjs bundles.
- **Predefined scripts**: yarn build, yarn dev, yarn test... commonly used predefined scripts.
- **Testing environment**: Mocha, Chai, Karma & the gang to easily test your controller.

## Getting started

To create a new package clone and rename this repo

```bash
git clone https://github.com/adrienpoly/stimulus-library-boilerplate.git my-controller-name
cd my-controller-name
rm -rf .git
yarn install
```

- rename the package name in `package.json`
- code your controller in `src/index.js`
- add tests & fixtures in `spec`

## Scripts

- `yarn build` : bundle in production mode & builds the package in the `dist` directory
- `yarn dev` : watch for changes & bundle in development mode
- `yarn test` : launch the test suite in a headless browser
- `yarn test:watch` : watch for changes & launch the test suite in a headless browser
- `yarn test:browser` : watch for changes & launch the test suite in a chrome browser

## Playground

When developing a controller you might want to set up a little playground environment to play & test your controller.
In `./playground` you can modify `index.html` & `index.js` to suit your need.
The playground can be started with :

```bash
yarn start
```

## Contributing

Bug reports and pull requests are welcome.

## License

This package is available as open source under the terms of the MIT License.
