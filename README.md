# rollup-plugin-dotenv

## Installation

```console
npm install rollup-plugin-dotenv
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import dotenv from "rollup-plugin-dotenv"

export default {
  input: "src/index.js",
  output: [
    dir: "dist/build"
  ],
  plugins: [
    dotenv()
  ]
}
```

create your `.env` file in the root of your project.

```bash
# .env
FOO=bar
```

so you can use FOO in your javascript files.

```js
// src/index.js
console.log(process.env.FOO)
```

your env variables will be replaced by their values in your bundled file.

```js
// dist/build/index.js
console.log('bar')
```

if you want to know more about the principle and restrictions of replacement, please read [@rollup/plugin-replace](https://www.npmjs.com/package/@rollup/plugin-replace) notes.

## Options

You can specify the options below.

### `cwd`

Type: `String`
Default: `"."`

directory in which to search for env files.

### `envKey`

Type: `String`
Default: `"NODE_ENV"`

key used to search for .env files by node environment

Rollup will merge env vars located at

```
[
  `.env.${process.env[envKey]}.local`,
  `.env.${process.env[envKey]}`,
  '.env.local',
  '.env',
]
```

so if you are in `prod`, rollup will search in

```
['.env.prod.local', '.env.prod', '.env.local', '.env']
```

and merge the result.

[LICENSE (MIT)](/LICENSE)
