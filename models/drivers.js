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
        coordinates: []
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

/**
 * Create new driver
 *
 * @param params
 * @param callback
 */
DriversSchema.statics.create = function(params, callback) {
    if (!(params && params.name && params.latitude && params.longitude)) {
        return callback({ message: 'Missing field' });
    }

    let options = {
        name: params.name,
        location: {
            'type': 'Point',
            'coordinates': [
                parseFloat(params.latitude),
                parseFloat(params.longitude)
            ]
        }
    };

    return new this(options).save(callback);
};

/**
 * Export driver model
 */
export default mongoose.model('Drivers', DriversSchema);