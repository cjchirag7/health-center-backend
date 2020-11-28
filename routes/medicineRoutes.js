const express = require('express');
const router = express.Router();
const {
    getMedicineDetails, 
    addMedicineDetails, 
    getMedicineDetailsById,    
    editMedicineDetailsById, 
} = require('../controllers/medicineController');

router.get('/medicines', getMedicineDetails);
router.post('/medicines', addMedicineDetails);
router.get('/medicines/:id', getMedicineDetailsById);
router.put('/medicines/:id', editMedicineDetailsById);

module.exports = router;