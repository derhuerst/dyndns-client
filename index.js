'use strict'

const https = require('https')

module.exports = (hostname, port, key) =>
	(record, ip) => new Promise((yay, nay) =>{

		const req = https.request({
			method: 'PATCH',
			auth: 'user:' + key,
			hostname, port,
			path: '/' + record
		}, (res) => {
			let body = ''
			res.on('data', (chunk) => {body += chunk.toString()})
			res.on('end', () => {
				if (body === ip) yay(ip)
				else {
					const msg = res.statusMessage || ' invalid response'
					const err = new Error(msg)
					err.statusCode = res.statusCode
					err.headers = res.headers
					nay(err)
				}
			})

			res.on('errro', nay)
		})
		req.on('error', nay)

		req.end(ip)
	})
