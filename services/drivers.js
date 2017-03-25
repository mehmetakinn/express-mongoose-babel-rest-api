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

    /**
     * Get driver
     */
    get (id, callback) {
        if (!id) {
            return callback({ message: 'Missing field' });
        }

        let options = {
            _id: id,
            deletedAt: null
        };

        DriverModel.find(options, callback);
    }

    /**
     * List drivers
     */
    list (options, callback) {
        options = options || {};

        options.deletedAt = null;
        DriverModel.find(options, callback);
    }

    /**
     * Update driver
     */
    update (id, params, callback) {
        if (!id || !params || _.isEmpty(params)) {
            return callback({ message: 'Missing field' });
        }

        params.updatedAt = new Date();

        let options = {
            _id: id,
            deletedAt: null
        };

        DriverModel.update(options, { $set: params }, { new: true }, callback);
    }

    /**
     * Delete driver
     */
    delete (id, callback) {
        if (!id) {
            return callback({ message: 'Missing field' });
        }

        let options = {
            _id: id,
            deletedAt: null
        };

        DriverModel.update(options, { $set: { deletedAt: new Date() } }, { new: true }, callback);
    }

    /**
     * Permanently delete driver
     */
    permanentlyDelete (id, callback) {
        if (!id) {
            return callback({ message: 'Missing field' });
        }

        DriverModel.findByIdAndRemove(id, callback);
    }
}

/**
 * Export driver service
 */
export default new DriverService();
