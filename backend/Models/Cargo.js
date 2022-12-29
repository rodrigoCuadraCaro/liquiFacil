import mongoose, {Schema, model, models} from 'mongoose';


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

export default models.Cargo || mongoose.model('Cargo', cargoSchema);

