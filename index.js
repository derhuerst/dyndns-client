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
				else nay(new Error('invalid body'))
			})

			res.on('errro', nay)
		})
		req.on('error', nay)

		req.end(ip)
	})
