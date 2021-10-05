const express = require('express');
const router = express.Router();
const { Profiles, Users } = require('../models');
const uuid = require('uuid');
const { check, validationResult } = require('express-validator');
const { validateToken } = require('../middlewares/UserMiddleware');

router.get('/', async (req, res) => {
    try {
        const profiles = await Profiles.findAll();
        res.json(profiles);
    } catch (error) {
        res.json(error);
    }
});

router.post('/', validateToken,
    [
        check('fullName', 'Name is required field').exists().isLength({ min: 5, max: 50 }).withMessage('Name should be 5 to 50 chacacters').isString().withMessage('Name can only contain letters & numbers'),
        check('birthday', 'Date of birth is required').exists().isDate().withMessage('Invalid Date'),
        check('district', 'District required').exists(),
        check('city_province', 'City/Province required').exists(),
        check('country', 'Country required').exists(),
        check('gender', 'Gender is a required field').exists(),
        check('family_status', 'Family status required').exists(),
        check('phone', 'Enter your Phone').exists().isLength({ min: 10, max: 10 }).withMessage('Name should be 3 to 50 chacacters').isString(),
        check('email', 'Invalid email').isEmail().normalizeEmail(),
    ],
    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json(error);
        } else {
            try {
                const profile = req.body;
                profile.UserId = req.user.id;
                profile.id = req.user.id;
              
                const existingData = await Users.findOne({ where: { email: profile.email, phone: profile.phone } });

              
                    await Profiles.create(profile);
                    res.json("Profile registered");
               

            } catch (error) {
                res.json(error);
            }
        }
    });


module.exports = router;