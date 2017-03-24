import express from 'express';
const router = express.Router();

/**
 * Get all drivers
 */
router.get('/', (req, res) => {
    res.json({ err: null, data: {} });
});

/**
 * Get driver by id
 */
router.get('/:id', (req, res) => {
    res.json({ err: null, data: {} });
});

/**
 * Create new driver
 */
router.post('/', (req, res) => {
    res.json({ err: null, data: {} });
});

/**
 * Update drive by id
 */
router.put('/:id', (req, res) => {
    res.json({ err: null, data: {} });
});

/**
 * Delete drive by id
 */
router.delete('/:id', (req, res) => {
    res.json({ err: null, data: {} });
});

export default router;
