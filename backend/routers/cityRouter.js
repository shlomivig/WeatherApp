const express = require('express');
const cityBL = require('../models/cityBL');

const router = express.Router();

// Get citys
router.route('/')
.post( async function(req, res){

    let data = req.body
    
    let citys = await cityBL.getCitysByCountry(data);
    return res.json(citys)
})


module.exports = router;