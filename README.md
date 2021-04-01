# graphql-method-block

[![Build Status](https://travis-ci.org/pukuba/graphql-method-block.svg?branch=master)](https://travis-ci.org/pukuba/graphql-method-block)

Blocking Methods in GraphQL

## How to use?

``` js
const methodBlock = require("graphql-method-block")
const app = express()
app.use("/graphql",methodBlock)
```

## How to run?
``` 
npm install
npm test
```