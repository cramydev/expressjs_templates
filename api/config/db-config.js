require("dotenv").config({
	path: "../.env"
});

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

const dbConfig = {
	development: {
		database: process.env.DB_NAME,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: `${process.env.DB_DIALECT}`,
		dialectOptions: {
			timezone: "+00:00"
			// useUTC: true, // for reading from database
		},
		timezone: "+00:00" // for writing to database
	},
	test: {
		database: "test",
		username: "test",
		password: "132",
		host: "test",
		port: "5432",
		dialect: "test",
		dialectOptions: {
			timezone: "+00:00"
			// useUTC: true, // for reading from database
		},
		timezone: "+00:00" // for writing to database
	},
	production: {
		database: process.env.DB_NAME,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: `${process.env.DB_DIALECT}`,
		dialectOptions: {
			...dialectOptions
		},
		timezone: "+00:00" // for writing to database
	}
};

module.exports = dbConfig
