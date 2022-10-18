const express = require('express')
const app = express()
const port = 5000
// const cors = require('cors')
require('./db/conn')
const router = require('./router/data')

app.use(express.json())
app.use(router)
// app.use(cors())

app.listen(port,()=>{
    console.log(`connection running with port is ${port}`)
})
