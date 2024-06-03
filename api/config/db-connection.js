const { Sequelize } = require('sequelize');

let dialectOptions = {}

if (Number(process.env.DB_SSL_REQUIRE) === 1) {
	dialectOptions = {
		ssl: {
			require: true,
			// rejectUnauthorized: false
		},
		timezone: "+00:00"
	}
} else {
	dialectOptions = {
		timezone: "+00:00"
	}
}

const dbConnection = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_DIALECT,
		dialectOptions: {
			...dialectOptions
		},
		ssl: false,
		pool: {
			max: 5,
			min: 0,
			acquire: 60000,
			idle: 10000
		},
		timezone: "+00:00" // for writing to database
	}
);

module.exports = dbConnection
