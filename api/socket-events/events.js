function socketEvents(io) {
	if (io) {
		io.on('connection', (socket) => {
			socket.on('check-connection', () => {
				console.log('---- connection initiated ----')
			})

			// set up socket events here
		})
	}
}

module.exports = {
	socketEvents
}
