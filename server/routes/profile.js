const express = require('express');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');
const {createToken, deleteToken} = require('./tokens');
// const { createToken, deleteToken, getProfileId } = require('../tokens');
const {readProfiles, writeProfiles} = require('./profiledata');

const getRandomId = () => crypto.randomBytes(20).toString('hex');

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const profiles = readProfiles();
    const profile = profiles.find(profile => profile.email === email && profile.password === password)

    if (profile) {
        const newToken = createToken(profile.id);
        res.json({ token: newToken, profileId: profile.id, name: profile.name });
    }
    else {
        res.status(403).json({error: "Invalid email or password"})
    }

});

router.post('/logout', (req, res) => {
    const token = req.body.token;
    deleteToken(token);
    res.json({ deleted: true });
});


router.post('/', (req, res) => {

    const profile = {
        id: getRandomId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      
    }

    // TODO: DO THIS AS THE FIRST THING
    //MYSQL: INSERT INTO profiles (name, email, password) VALUE (name, email, password)

    const profiles = readProfiles();
        profiles.push(profile);
        writeProfiles(profiles);
        res.json(profile);
});

router.get('/:profileId', (req, res) => {
    const profileId = req.params.profileId;
    //MYSQL: SELECT * FROM profiles WHERE id = profileId
    const profiles = readProfiles();
    const profile = profiles.find(p => p.id === profileId);
    if(!profile){
        res.json({});
        return;
    }
    const data = {
        name: profile.name,
        email: profile.email,
        bio: profile.bio,
        imagePath: profile.imagePath
    };
    res.json(data);
})




router.get('/', (req, res) => {
    res.json(readProfiles());
});








module.exports = router;