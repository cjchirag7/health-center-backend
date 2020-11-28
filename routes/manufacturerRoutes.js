const express = require('express');
const router = express.Router();
const {
    getManufacturerDetails, 
    addManufacturerDetails, 
    getManufacturerDetailsById, 
    editManufacturerDetailsById,     
} = require('../controllers/manufacturerController');

router.get('/manufacturers', getManufacturerDetails);
router.post('/manufacturers', addManufacturerDetails);
router.get('/manufacturers/:id', getManufacturerDetailsById);
router.put('/manufacturers/:id', editManufacturerDetailsById);

module.exports = router;