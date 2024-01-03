const express = require('express');
const router = express.Router();

const priceController = require('./priceController');
const dateController = require('./dateController');
const userController = require('./userController');
const stagesController = require('./stagesController');
const englishController = require('./englishController');

router.get('/prices', priceController.getPrices);
router.get('/dates/get-date', dateController.getStoredDate);
router.post('/dates/save-date', dateController.saveSelectedDate);
router.get('/selectedLocations/get-loc', dateController. getSelectedLocations);
router.post('/selectedLocations/save-loc', dateController.saveSelectedLocations);
router.get('/dates/stages', stagesController.getStages);
router.get('/english-data', englishController.getEnglishData);
router.get('/tamil-data', englishController.getTamilData);
router.post('/login', userController.loginUser);

module.exports = router ;
