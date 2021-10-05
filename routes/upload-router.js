const express = require('express');
const router = express.Router();
const { Uploadings } = require('../models');
const uuid = require('uuid');
const { validateToken } = require('../middlewares/UserMiddleware');
const uploadMultiple = require('../middlewares/uploadMultiple');



router.get('/', async (req, res) => {
    try {
        const uploadings = await Uploadings.findAll();
        res.json(uploadings);
    } catch (error) {
        res.json(error);
    }
});


// router.post('/', validateToken,
router.post('/', uploadMultiple, validateToken, async (req, res) => {

    try {
        uploadings = req;
        if (req.files) {
            const files = JSON.parse(JSON.stringify(req.files));

            const pathnames = Object.values(files).map((file) => file[0].filename);

            // console.log(pathnames[1]);
            // res.json(pathnames[1]);

            uploadings.id = uuid.v4();
            uploadings.passport = pathnames[0];
            uploadings.high_skl_cert = pathnames[1];
            uploadings.transcript = pathnames[2];
            uploadings.dregrew_cert = pathnames[3];
            uploadings.degree_cert = pathnames[4];
            uploadings.complete_cv = pathnames[5];
            uploadings.germanLangCert = pathnames[6];
            uploadings.otherLangSkl = pathnames[7];
            uploadings.motivation_letter = pathnames[8];
            uploadings.fullName = req.user.fullName;
            uploadings.UserId = req.user.id;

            await Uploadings.create(uploadings);
            res.json("Your files is uploaded");
        }

    } catch (error) {
        console.log(error);
        res.json(error);
    }

});


module.exports = router;