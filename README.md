## minimal-react-boilerplate

![](https://img.shields.io/github/languages/code-size/rishichawda/minimal-react-boilerplate.svg?style=for-the-badge)
![](https://img.shields.io/david/rishichawda/minimal-react-boilerplate.svg?style=for-the-badge)
![](https://img.shields.io/david/dev/rishichawda/minimal-react-boilerplate.svg?style=for-the-badge)

A minimal react boilerplate with webpack 4, babel v7 and sass support.

- All the good things from Webpack 4 including faster builds.
- Babel 7.
- ESLint ( with prettier config :tada: ) - give the configuration a shot and thank me later. And [Dan Abramov](https://github.com/gaearon) too - since I got the idea from him.

  This also means no unnecessary semi-colons in your files!

- SASS support.
- Easy and cleaner imports.

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
