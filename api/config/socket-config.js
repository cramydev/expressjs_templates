const {socketEvents} = require("../socket-events/events");

function socketInit(server) {
	if (server) {
		let io = require('socket.io')(server, {
			cors: {
				origin: '*',
				methods: ['GET', 'POST']
			}
		})

		console.log(`Socket is listening on port ${process.env.SERVER_PORT}`)

		socketEvents(io)
	}
}

module.exports = {
	socketInit
}
