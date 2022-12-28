const mongoose = require('mongoose');

const cargoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salarioBase: {
        type: Number,
        required: true
    },
    gratificacion: {
        type: Number,
        required: true
    }
});

const Cargo = mongoose.model('Cargo', cargoSchema);
export default Cargo;
