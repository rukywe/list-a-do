const mongoose = require("mongoose");


const connectDb = async () => {

try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser:true, 
        useCreateIndex: true, 
        useFindAndModify: true, 
        useUnifiedTopology: true
    })

    console.log(`MongoDB connected: ${conn.connection.host}`)
    
} catch (error) {
            console.error(error)
            process.exit(1)
}
    
}

 module.exports = connectDb; 
