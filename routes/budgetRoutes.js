const express = require('express');
const router = express.Router();
const {
    getBudgetDetails, 
    addBudgetDetails, 
    getBudgetDetailsById, 
    editBudgetDetailsById, 
} = require('../controllers/budgetController');

router.get('/budget', getBudgetDetails);
router.post('/budget', addBudgetDetails);
router.get('/budget/:id', getBudgetDetailsById);
router.put('/budget/:id', editBudgetDetailsById);

module.exports = router;