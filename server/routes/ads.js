const express = require('express');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');
const { getProfileId } = require('./tokens');
const {readProfiles} = require('./profiledata');

function readAds() {
    const ads = fs.readFileSync('./data/ads.json');    
    const parsedData = JSON.parse(ads);
    console.log(parsedData);
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

    const token = req.body.token
    const profileId = getProfileId(token);
    ad.postedBy = profileId;

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
    const ads = readAds().reverse();
    const profiles = readProfiles();

    ads.forEach(ad => {
        const postedBy = ad.postedBy;
        const profile = profiles.find(profile => profile.id === postedBy)
        if(profile){
            ad.postedByName = profile.name
        }
    })
    res.json(ads);
})


router.get('/:adId', (req, res) => {
    console.log('shahana');
let newId = req.params.adId;
console.log(newId);
let allAds = readAds();
//  console.log(allAds);
let ad = allAds.find(ad =>  ad.id === newId)
console.log(ad);
res.send(ad);


})

module.exports = router;