import DriverModel from './../models/drivers';

/**
 * Driver Service
 */
class DriverService {
    /**
     * Create new driver
     */
    create (params, callback) {
        DriverModel.create(params, callback);
    }

    get (id, callback) {
        DriverModel.findById(id, callback);
    }

    list (options, callback) {
        options = options || {};

        DriverModel.find(options, callback);
    }
}

/**
 * Export driver service
 */
export default new DriverService();
