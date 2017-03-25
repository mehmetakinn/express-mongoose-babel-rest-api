import express from 'express';
import DeriverService from './../services/drivers';
const router = express.Router();

/**
 * GET /dirvers - Get all drivers
 */
router.get('/', (req, res) => {
    DeriverService.list(req.query, (err, data) => {
        res.json({ err: err, data: data });
    });
});

/**
 * GET /drivers/:id - Get driver by id
 */
router.get('/:id', (req, res) => {
    DeriverService.get(req.params.id, (err, data) => {
        res.json({ err: err, data: data });
    });
});

/**
 * POST /drivers - Create new driver
 */
router.post('/', (req, res) => {
    DeriverService.create(req.body, (err, data) => {
        res.json({ err: err, data: data });
    });
});

/**
 * PUT /drivers/:id - Update driver by id
 */
router.put('/:id', (req, res) => {
    DeriverService.update(req.params.id, req.body, (err, data) => {
        res.json({ err: err, data: data });
    });
});

/**
 * DELETE /drivers/:id - Delete driver by id
 */
router.delete('/:id', (req, res) => {
    DeriverService.delete(req.params.id, (err, data) => {
        res.json({ err: err, data: data });
    });
});

export default router;
