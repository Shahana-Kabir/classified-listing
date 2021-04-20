const express = require('express');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');

function readProfiles() {
    const profiles = fs.readFileSync('./data/profiles.json');
    const parsedData = JSON.parse(profiles);
    return parsedData;
}

function writeProfiles(profiles) {
    const jsonProfile = JSON.stringify(profiles, null, '  ');
    fs.writeFileSync('./data/profiles.json', jsonProfile);
}

const getRandomId = () => crypto.randomBytes(20).toString('hex');

router.post('/', (req, res) => {

    const profile = {
        id: getRandomId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      
    }

    const profiles = readProfiles();
        profiles.push(profile);
        writeProfiles(profiles);
        res.json(profile);
});


router.get('/', (req, res) => {
    res.json(readProfiles());
});


// router.get('/', (req, res) => {
  
//     const profiles = readProfiles();
    
    
//     const data = {
//         name: profiles.name,
//         email: profiles.email,
//         bio: profiles.bio,
//         imagePath: profiles.imagePath
//     };
//     res.json(data);
// });



module.exports = router;