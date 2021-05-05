const express = require('express');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');

function readPopular() {
    const populars = fs.readFileSync('./data/popularAds.json');
    const parsedData = JSON.parse(populars);
    return parsedData;

}





 

router.get('/', (req, res) => {
    
    res.send(readPopular());
    
    
})



module.exports = router;