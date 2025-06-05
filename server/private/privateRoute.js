const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
    try{
        res.status(200).json({
            message: 'User Kyle'
        });
    }
    catch (error) {
        console.error('Error in public route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;