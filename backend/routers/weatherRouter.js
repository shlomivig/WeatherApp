const express = require('express');
const weatherBL = require('../models/weatherBL');

const router = express.Router();

// Get weather
router.route('/')
.post( async function(req, res){

    let city = req.body.place
    let weather = await weatherBL.getWeatherData(city);
    return res.json(weather)
})


module.exports = router;