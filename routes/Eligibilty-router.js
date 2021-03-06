const express = require('express');
const router = express.Router();
const { Eligibilties } = require('../models');
const uuid = require('uuid');
const { validateToken } = require('../middlewares/UserMiddleware');


router.get('/', async (req, res) => {
    try {
        const eligibilties = await Eligibilties.findAll();
        res.json(eligibilties);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});


router.post('/', validateToken, async (req, res) => {
    try {

        const eligibilty = req.body;
        eligibilty.UserId = req.user.id;
        eligibilty.fullName = req.user.fullName;
        if (eligibilty.germanLangCert === "no") {
            eligibilty.GermLangLevel = null;
        }
        eligibilty.id = uuid.v4();
        await Eligibilties.create(eligibilty);
        res.json("eligibilties created");
    } catch (error) {
        console.log(error);
        res.json(error);
    }

});


module.exports = router;