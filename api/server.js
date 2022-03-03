const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')
const Users = require("./users/users-model")
const classesRouter = require("./classes/classes-router")
const userRouter = require("./users/users-router")
const authRouter = require("./auth/auth-router")
const { restricted } = require('./auth/auth-middleware')


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/classes', classesRouter)
server.use('/api/user', userRouter)
server.use('/api/auth', authRouter)


server.get('/', (req, res, next) => {
  res.send('api is working')
})

server.get("/api/users", restricted, async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    prodMessage: 'something went wrong',
    stack: err.stack,
  });
});

module.exports = server;
