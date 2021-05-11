const fs = require('fs');

function readProfiles() {
    const profiles = fs.readFileSync('./data/profiles.json');
    const parsedData = JSON.parse(profiles);
    return parsedData;
    //MySQL: select * from profiles then convert to JSON
}

function writeProfiles(profiles) {
    const jsonProfile = JSON.stringify(profiles, null, '  ');
    fs.writeFileSync('./data/profiles.json', jsonProfile);
}


module.exports = {readProfiles, writeProfiles}

