// required libraries
const express = require('express');

const router = express.Router();

// v1 routing
router.use('/v1',require('./v1'));

module.exports = router;