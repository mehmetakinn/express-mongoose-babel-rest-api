import DriverModel from './../models/drivers';
import _ from 'lodash';

/**
 * Default count of nearest drivers
 */
const nearestDeriversCount = 3;

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

        let limit = false;
        if (options.limit) {
            limit = options.limit;
            delete options.limit;
        }

        options.deletedAt = null;
        let query = DriverModel.find(options);

        if (limit) {
            query.limit(limit);
        }

        query.exec(callback);
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

    /**
     * Get nearest drivers
     */
    getNearest (params, callback) {
        if (_.isEmpty(params) || !params.latitude || !params.longitude) {
            return callback({ message: 'Missing field' });
        }

        let options = {
            location: {
                '$near': {
                    '$geometry': {
                        type: 'Point',
                        coordinates: [
                            parseFloat(params.latitude),
                            parseFloat(params.longitude)
                        ]
                    }
                }
            },
            limit: +params.limit || nearestDeriversCount
        };

        this.list(options, callback);
    }
}

/**
 * Export driver service
 */
export default new DriverService();
