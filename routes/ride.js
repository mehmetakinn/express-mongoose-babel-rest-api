import express from 'express';
import DeriverService from './../services/drivers';
const router = express.Router();

/**
 * GET /ride - Get nearest drivers
 */
router.get('/', (req, res) => {
    DeriverService.getNearest(req.query, (err, data) => {
        res.json({ err: err, data: data });
    });
});

export default router;
