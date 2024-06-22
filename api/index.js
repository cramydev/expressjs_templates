require('dotenv').config({
	path: './.env'
})

const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '20mb' }))
app.use(cors())
const SERVER_PORT = process.env.SERVER_PORT || 3000

// config
const dbConnection = require('./config/db-connection')
// const {socketInit} = require('./config/socket-config')

// routes
const routesInit = require('./routes/routes')

function routesInitHandle() {
	routesInit(app)
}

// function socketInitHandle() {
// 	socketInit(server)
// }

async function dbConnectionHandle() {
	try {
		let connection = await dbConnection()
		console.log(connection.message)

		if (!connection.error) {
		listenServerHandle()
		routesInitHandle()
	} 
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}

function listenServerHandle() {
	app.listen(SERVER_PORT, () => {
		console.log(`Server is running on ${SERVER_PORT}`)
	})
}

dbConnectionHandle()
// listenServerHandle()
// routesInitHandle()
