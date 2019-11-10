const express = require('express')
const bodyParser = require('body-parser')

// read .env variable
require('dotenv').config()

// start database connection
let mongoDB = require('./config/mongoHandler')
mongoDB.init()

const router = express.Router();
const app = express()

// install middlewares
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// todo item routes
router.use('/item', require('./routes/index'));
app.use('/', router)

app.listen(process.env.PORT, () => console.log(`app running on port ${process.env.PORT}`))