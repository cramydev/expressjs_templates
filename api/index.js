require('dotenv').config({
	path: './.env'
})

const express = require('express')
const cors = require('cors')
const { createServer } = require('node:http')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '20mb' }))
app.use(cors())
const SERVER_PORT = process.env.SERVER_PORT || 3000

server = createServer(app)

// config
const dbConnection = require('./config/db-connection')
const {socketInit} = require('./config/socket-config')

// routes
const routesInit = require('./routes/routes')

function routesInitHandle() {
	routesInit(app)
}

function socketInitHandle() {
	socketInit(server)
}

async function dbConnectionHandle() {
	try {
		await dbConnection.authenticate()
		console.log('Database connection has been established successfully.')
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}

function listenServerHandle() {
	app.listen(SERVER_PORT, () => {
		console.log(`Server is running on ${SERVER_PORT}`)
	})
}

listenServerHandle()
dbConnectionHandle()
socketInitHandle()
routesInitHandle()
