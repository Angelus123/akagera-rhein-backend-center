
const multer = require("multer");

const path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploadedFiles");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

let upload = multer({ storage: storage });

let uploadMultiple = upload.fields([{ name: 'file1' }, { name: 'file2' }, { name: 'file3' }, { name: 'file4' }, { name: 'file5' }, { name: 'file6' }, { name: 'file7' }, { name: 'file8' }, { name: 'file9' }])

module.exports = uploadMultiple;
