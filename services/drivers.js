import DriverModel from './../models/drivers';
import _ from 'lodash';

/**
 * Driver Service
 */
class DriverService {
    /**
     * Create new driver
     */
    create (params, callback) {
        if (!(params && params.name && params.latitude && params.longitude)) {
            return callback({ message: 'Missing field' });
        }

        DriverModel.create(params, callback);
    }

    get (id, callback) {
        if (!id) {
            return callback({ message: 'Missing field' });
        }

        DriverModel.findById(id, callback);
    }

    list (options, callback) {
        options = options || {};

        DriverModel.find(options, callback);
    }

    update (id, params, callback) {
        if (!id || !params || _.isEmpty(params)) {
            return callback({ message: 'Missing field' });
        }

        params.updatedAt = new Date();

        DriverModel.findByIdAndUpdate(id, { $set: params }, { new: true }, callback);
    }
}

/**
 * Export driver service
 */
export default new DriverService();
