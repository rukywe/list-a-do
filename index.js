// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
//   }
  

const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3030
const cors = require('cors')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const indexRoute = require('./routes/index')
const methodOverride = require('method-override')

app.set("view engine" , "ejs")
app.set("views", path.join(__dirname , 'views'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("Public"))


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// //enable Cors
// app.use(cors())

//load env
dotenv.config({path:'./config/config.env'})

//connction to DB
connectDb()


app.use('/' , indexRoute )


app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})



 
