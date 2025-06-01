const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    try{
        res.status(200).json({
            message: 'Welcome to the public API route!'
        });
    }
    catch (error) {
        console.error('Error in public route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;