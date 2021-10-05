const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const path = require('path')
app.use('/', express.static(path.join(__dirname, 'uploadedFiles')))

//Routers
const eligibiltyRouter = require('./routes/Eligibilty-router');
app.use('/eligibilty', eligibiltyRouter);
const usersRouter = require('./routes/Users-router');
app.use('/user', usersRouter);
const profilesRouter = require('./routes/Profiles-router');
app.use('/profile', profilesRouter);
const applicationsRouter = require('./routes/Applications-router');
app.use('/application', applicationsRouter);
const checkListRouter = require('./routes/CheckList');
app.use('/checkList', checkListRouter);
const involvementRouter = require('./routes/Involvements-router');
app.use('/involvement', involvementRouter);
const uploadRouter = require('./routes/upload-router');
app.use('/upload', uploadRouter);

//ErrorHandling
const HttpError = require('./error_handling/http-error');
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
});

const db = require('./models');
db.sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log("Server running || 5000");
    });
})


