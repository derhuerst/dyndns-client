# dyndns-client

**A client for [`dyndns-server`](https://github.com/derhuerst/dyndns-server).**

[![dependency status](https://img.shields.io/david/derhuerst/dyndns-client.svg)](https://david-dm.org/derhuerst/dyndns-client)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/dyndns-client.svg)](https://david-dm.org/derhuerst/dyndns-client#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/dyndns-client.svg)


## Installing

```shell
npm install dyndns-client
```


## Usage

```js
const dyndns = require('dyndns-client')('dyndns-server.example.org', 8053, '<key>')

dyndns('A', '127.0.0.1').then(/* … */)
dyndns('AAAA', '::1').then(/* … */)
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/dyndns-client/issues).
