const mongoose = require('mongoose');

async function dbConnection() {
	try {
		const { DB_NAME, DB_HOST, DB_USERNAME, DB_PASSWORD} = process.env

		const stringConnection = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_NAME}.${DB_HOST}/?retryWrites=true&w=majority&appName=${DB_NAME}`

		await mongoose.connect(stringConnection)

		return {
			error: false,
			message: 'Database connection has been established',
		}
	} catch(error) {
		return {
			error: true,
			data: error,
			message: 'Unable to connect to the database',
		}
	}
}

module.exports = dbConnection
