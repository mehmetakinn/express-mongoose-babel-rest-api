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
}

/**
 * Export driver service
 */
export default new DriverService();
