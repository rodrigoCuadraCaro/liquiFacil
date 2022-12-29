import mongoose, {Schema, model, models} from 'mongoose';

const liquidationSchema = new mongoose.Schema({
    workerName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker'
    },
    rut: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker'
    },
    date: {
        type: Date,
        required: true
    },
    previsionSocialName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker'
    },
    salarioBase: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker'
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
});

export default models.Liquidation || mongoose.model('Liquidation', liquidationSchema);