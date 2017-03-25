import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Driver Schema
 */
const DriversSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim : true
    },
    location: {
        type: { type: String },
        coordinates: [],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: null
    }
});

DriversSchema.index({ location: '2dsphere' });

export default mongoose.model('Drivers', DriversSchema);