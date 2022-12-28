import mongoose, {Schema, model, models} from 'mongoose';

const afpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    comision: {
        type: Number,
        required: true,
    }
});

export default models.AFP ||model('AFP', afpSchema);
