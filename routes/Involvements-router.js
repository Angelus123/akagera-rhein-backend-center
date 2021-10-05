const express = require('express');
const router = express.Router();
const { Involvements, Users } = require('../models');
const uuid = require('uuid');
const { check, validationResult } = require('express-validator');
const { validateToken } = require('../middlewares/UserMiddleware');


router.get('/', async (req, res) => {
    try {
        const involvements = await Involvements.findAll();
        res.json(involvements);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

router.post('/', validateToken,
    [
        check('fullName', 'Name is required field').exists().notEmpty().isLength({ min: 5, max: 50 }).withMessage('Name should be 5 to 50 chacacters').isString().withMessage('Name can only contain letters & numbers'),
        check('birthday', 'Date of birth is required').exists().notEmpty().isDate().withMessage('Invalid Date'),
        check('district', 'District required').exists().notEmpty(),
        check('city_province', 'City/Province required').exists().notEmpty(),
        check('nationality', 'Country required').exists().notEmpty(),
        check('phone', 'Enter your Phone').exists().isLength({ min: 10, max: 10 }).withMessage('Name should be 3 to 50 chacacters').isString().notEmpty(),
        check('email', 'Invalid email').isEmail().normalizeEmail(),
    ],
    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json(error);
        }
        try {
            const involvement = req.body;
            involvement.UserId = req.user.id;
            const existingData = await Users.findOne({ where: { email: involvement.email, phone: involvement.phone } });

            if (existingData) {
                involvement.id = uuid.v4();
                await Involvements.create(involvement);
                res.json("Now you are involved");
            } else {
                return res.json({ error: "Plz Correct your email or phone, Otherwise your are not registered" });
            }

        } catch (error) {
            console.log(error);
            res.json(error);
        }
    });


module.exports = router;