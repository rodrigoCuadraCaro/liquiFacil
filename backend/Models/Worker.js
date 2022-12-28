const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rut: {
        type: String,
        required: true,
        unique: true
    },
    cargo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cargo'
    },
    previsionSocial: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AFP'
    },
    salarioBase: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cargo'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    liquidations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Liquidation'
    }]
});

const Worker = mongoose.model('Worker', workerSchema);
export default Worker;
