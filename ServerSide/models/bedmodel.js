const mongoose = require('mongoose');

let bedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['free', 'occupied', 'reserved'],
        default: 'free',
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

let Bed = mongoose.model('Bed', bedSchema);

module.exports = Bed;
