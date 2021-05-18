const express = require('express');
const router = express.Router();

router.get('/slash/:id', (req, res) => {
    res.send('Hello World' + req.params.id);
})

module.exports = router;
