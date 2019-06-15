## minimal-react-boilerplate

![](https://img.shields.io/github/package-json/v/rishichawda/minimal-react-boilerplate.svg?style=popout-square)
![](https://img.shields.io/github/last-commit/rishichawda/minimal-react-boilerplate/master.svg?style=popout-square)
![](https://img.shields.io/david/rishichawda/minimal-react-boilerplate.svg?style=popout-square)
![](https://img.shields.io/david/dev/rishichawda/minimal-react-boilerplate.svg?style=popout-square)
![](https://img.shields.io/travis/rishichawda/minimal-react-boilerplate.svg?style=popout-square)

A minimal react boilerplate with webpack 4, babel v7 and sass support.

- **Webpack 4** - All the good things from Webpack 4 including faster builds.
- **Babel 7**
- **ESLint ( with prettier config )** - give the configuration a shot and thank me later. :smile:
- **Husky** - Pre-commit lint check for staged files to ensure :poop:-code is never commited.
- **CSS and SASS support.**

- **Easy and cleaner imports with [babel module resolver](https://github.com/tleunen/babel-plugin-module-resolver).**

For example, if you have a directory structure like this:

```
src
-- components
-- config
---- secret-config.js
-- pages
---- home
------ index.js
```

You can import `secret-config.js` in `index.js` as :

```jsx
import config from "config/secret-config.js";
```

- **Environment files** - environment variable imports are already configured and added! Just create `development.env` and `production.env` ( inside config directory ) with your environment variables and start using them in your app! :tada:

- **Snapshots and DOM testing** - Includes DOM testing with Jest and react-testing-library and also includes snapshot test examples with Jest. ( _**Bonus:** CI configuration included for TravisCI_ )

## Usage :

1. Clone the repository via _SSH_ :

```
$ git clone git@github.com:rishichawda/minimal-react-boilerplate.git
```

or _HTTPS_ :

```
$ git clone https://github.com/rishichawda/minimal-react-boilerplate.git
```

2.

```
$ cd minimal-react-boilerplate
$ npm install
```

#### Unfamiliar with git?

Simply click [here](https://github.com/rishichawda/minimal-react-boilerplate/archive/master.zip) to download the zip. Extract the _.zip_ file and run the following commands inside the directory.

```
$ npm install
$ npm run start
```

##

To start the development server :

```
$ npm run start
```

To generate production build :

```
$ npm run build
```
