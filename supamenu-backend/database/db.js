import mongoose, { connect } from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/supamenu-db', {
            useNewUrlParser : true,
            useUnifiedTopology: true
        })
        console.log('Connected to mongoDB')
    }

    catch (error) {
        console.log('Failed to connect to DB')
        process.exit(1)
    }
}

module.exports = connectDB;