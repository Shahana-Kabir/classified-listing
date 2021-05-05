const express = require('express');
const app = express();
const profileRoutes = require('./routes/profile');
const adsRoutes = require('./routes/ads');
const popularRoutes = require('./routes/popularAds');
const PORT = process.env.PORT || process.argv[2] || 8080;
const cors = require('cors');
const fileUpload = require('express-fileupload');
app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: 4
}));



app.use(express.static('Public'))
app.use(express.json());
app.use(cors());

app.use('/profiles', profileRoutes);
app.use('/ads', adsRoutes);
app.use('/popularAds', popularRoutes);


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
