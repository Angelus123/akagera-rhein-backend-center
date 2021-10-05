const express = require('express');
const router = express.Router();
const { Users, Eligibilties, Profiles, Applications } = require('../models');
const { validateToken } = require('../middlewares/UserMiddleware');

router.get('/', validateToken, async (req, res) => {
    allCheckList = await Users.findOne({ where: { id: req.user.id }, include: [Eligibilties, Profiles, Applications] })
    res.json(allCheckList);
});

module.exports = router;