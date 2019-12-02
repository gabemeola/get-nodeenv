# get-nodeenv 

Gets process.env.NODE_ENV. Can set a default.


## Install

```sh
$ yarn add get-nodeenv
```

## Usage

```js
import getNodeEnv from 'get-nodeenv';


getNodeEnv() // Defaults to "production"
getNodeEnv('development') // Set process.env.NODE_ENV to "development" if unset
```