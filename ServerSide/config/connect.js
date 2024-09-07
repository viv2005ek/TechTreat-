const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connect;