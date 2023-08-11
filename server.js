const mongoose = require('mongoose')
const dotenv = require('dotenvv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./config/db.js')




const app = express()

app.use(express.json())