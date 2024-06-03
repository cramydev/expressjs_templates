### CHECK OTHER BRANCHES TO SEE ANOTHER TEMPLATES

---

This is a template of a ExpressJS backend project. it includes structures for api controllers, db config and connection with Sequelize ORM, socket events and controllers, middlewares, helpers, etc.

Before starting to work on your project, please read these instructions.

### Packages

This project includes some packages already, however, I recommend to check the version of node and packages to verify if it's ok and avoid issues or similar.

### About config folder

Database related files are built to work with Sequelize ORM. If you want to use this structure but with another ORM or database managements, you'll need to change those files.

### Sequelize folders

If you don't want or you don't use sequelize, you can delete or change these files and/or folders:

| folder/files            | action           |
| ----------------------- | ---------------- |
| migrations              | remove           |
| config/db-config.js     | remove or modify |
| config/db-connection.js | remove or modify |
| models                  | remove or modify |
| .sequelizerc            | remove           |

### Socket

If you don't use socket events in your project, then you can delete these files and/or folders:

- config/socket-config.js
- socket-events
- socket-controllers

In the index.js root file, you'll need to do this modifications
| code | action |
| -------------- | ---- |
| const { createServer } = require('node:http') | remove line |
| server = createServer(app) | remove line |
| const {socketInit} = require('./config/socket-config') | remove line |
| function socketInitHandle() | remove function |
| socketInitHandle() | remove line |
| function listenServerHandle() | modify "server.listen" for "app.listen" |
