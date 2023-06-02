import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    sequenceValue: { type: Number, default: 10080 },
});

const Counter = mongoose.model('Counter', counterSchema);

export default Counter;
