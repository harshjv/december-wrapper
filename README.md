# December Wrapper

Wrapper around `/api/v0/broadcast` endpoint of [December Bot](https://t.me/DecemberBot)


## Installation

    npm install december-wrapper


## Usage

```js
var December = require('december-wrapper')

var channel = new December({
  channel_id: '5959f824301b3100041e2d79',
  channel_secret: '256b3f7c-1c19-43d7-b0ad-7a5f2d4e3467'
})

// Returns A+ Promise (axios)
channel.broadcast({
  hello: {
    world: 'december'
  }
})
// .then()
```


## API
* Documentation


## License
MIT
