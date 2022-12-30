import mongoose, {Schema, model, models} from 'mongoose';


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
    liquidations: [{
        date: {
            type: Date,
            required: true
        },
        salary: {
            type: Number,
            required: true
        },
        gratificacion: {
            type: Number,
            required: true
        },
        seguroDeCesantia: {
            type: Number,
            required: true
        },
        previsionSocialDiscount: {
            type: Number,
            required: true
        },
        totalBruto: {
            type: Number,
            required: true
        },
        totalDiscounts: {
            type: Number,
            required: true
        },
        totalLiquid: {
            type: Number,
            required: true
        }
    }]
});

export default models.Worker || mongoose.model('Worker', workerSchema);