const express = require('express')
const cors = require("cors")
const path = require("path")
const config = require("../config/config")

const app = express()
const indexRouter = require("./routes/index");

console.log(path.resolve('public'))

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve('build')))

app.use("/", indexRouter)

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
})

module.exports = app
