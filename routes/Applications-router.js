const express = require('express');
const router = express.Router();
const { Applications, Eligibilties } = require('../models');
const uuid = require('uuid');
const { validateToken } = require('../middlewares/UserMiddleware');


router.get('/', async (req, res) => {
    try {
        const applications = await Applications.findAll();
        res.json(applications);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

// get user data from eligibilty using 'http://localhost:5000/application/eligibilty' API
router.get('/eligibilty', validateToken, async (req, res) => {
    try {
        const eligibilty = await Eligibilties.findOne({ where: { UserId: req.user.id } });
        res.json(eligibilty);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

router.post('/', validateToken, async (req, res) => {
    try {
        const elig_Data = await Eligibilties.findOne({ where: { UserId: req.user.id } });
        const app_Data = await Applications.findOne({ where: { UserId: req.user.id } });
        if (app_Data) {
            return res.json("You can't have two applications");
        }

        const application = req.body;
        if (elig_Data.DiplomaOrCert === "no") {
            application.sec_schoolName = null;
            application.sec_subject = null;
            application.sec_year = null;
            application.sec_location = null;
            application.sec_diploma = null;
            application.other_sec_schoolName = null;
            application.other_sec_subject = null;
            application.other_sec_year = null;
            application.other_sec_location = null;
            application.other_sec_diploma = null;
        }
        if (elig_Data.university === "no") {
            application.un_schoolName = null;
            application.un_subject = null;
            application.un_year = null;
            application.un_location = null;
            application.un_degree = null;
            application.other_un_schoolName = null;
            application.other_un_subject = null;
            application.other_un_year = null;
            application.other_un_location = null;
            application.other_un_degree = null;
        }
        if (elig_Data.workingNow === "no") {
            application.workingcompanyName = null;
            application.workinglocation = null;
            application.workingposition = null;
            application.workingduration = null;
            application.other_workingcompanyName = null;
            application.other_workinglocation = null;
            application.other_workingposition = null;
            application.other_workingduration = null;
        }
        if (elig_Data.didInternship === "no") {
            application.inter_companyName = null;
            application.inter_location = null;
            application.inter_position = null;
            application.inter_duration = null;
            application.other_inter_companyName = null;
            application.other_inter_location = null;
            application.other_inter_position = null;
            application.other_inter_duration = null;
        }
        if (elig_Data.beenVolunteer === "no") {
            application.volunt_companyName = null;
            application.volunt_location = null;
            application.volunt_position = null;
            application.volunt_duration = null;
            application.other_volunt_companyName = null;
            application.other_volunt_location = null;
            application.other_volunt_position = null;
            application.other_volunt_duration = null;
        }

        application.UserId = req.user.id;
        application.fullName = req.user.fullName;

        application.id = uuid.v4();
        await Applications.create(application);
        res.json("Education background and working experience are created");
    } catch (error) {
        console.log(error);
        res.json(error);
    }

});


module.exports = router;