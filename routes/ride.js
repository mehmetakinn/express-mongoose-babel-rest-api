import express from 'express';
const router = express.Router();

/**
 * GET /ride - Get nearest drivers
 */
router.get('/', (req, res) => {
    res.json({ err: null, data: null });
});

export default router;
