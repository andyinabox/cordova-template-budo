Cordova Budo
=============

A barebones Cordova template that utilizes Matt Deslaurier's [budō](https://github.com/mattdesl/budo) browserify dev server.

Setup
------

### Install

Install with the Cordova CLI:

```bash
cordova create my-app --template cordova-template-budo
````

### Configure

Configure the dev server and build in the `scripts` part of the `package.json` file. The default is:

```js
"scripts": {
  "start": "budo app/index.js -H localhost --live --open --css app/styles.css",
  "build": "budo-demo app/index.js -o www -c app/styles.css -m",
  "clean": "rm -rf www/*"
}
```

See the reference for [budō](https://github.com/mattdesl/budo) and [budo-demo](https://github.com/andyinabox/budo-demo) for more options. The `build` and `clean` tasks are invoked in the `scripts/pre-build.js` hook.

Usage
-----

For dev server, run:

```bash
npm start
```

Otherwise, use the standard Cordova build workflow (`cordova build`).
