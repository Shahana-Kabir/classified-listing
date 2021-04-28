const express = require('express');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');

function readAds() {
    const ads = fs.readFileSync('./data/ads.json');
    const parsedData = JSON.parse(ads);
    return parsedData;
}

function writeAds(ads) {
    const jsonAds = JSON.stringify(ads, null, '  ');
    fs.writeFileSync('./data/ads.json', jsonAds);
}

const getRandomId = () => crypto.randomBytes(20).toString('hex');

router.post('/', (req, res) => {

    const ad = {
        id: getRandomId(),
        ad: req.body.ad,
        description: req.body.description,
        price: req.body.price,
            
    }

    const image = req.files.image;
    const uploadPath = __dirname + '/../public/images/' + ad.id + '-' + image.name;

    image.mv(uploadPath, (err) => {
        if (err){
          return res.status(500).send(err);
        }

        ad.imagePath = 'http://localhost:8080/images/'  + ad.id +  '-' + image.name;

        const ads = readAds();
        ads.push(ad);
        writeAds(ads);
        res.json(ad);

        
      });

    
});


router.get('/', (req, res) => {
    res.json(readAds().reverse());
})




module.exports = router;