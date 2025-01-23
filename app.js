const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const userRouter = require('./routes/userRoutes'); 
const internshipRouter = require('./routes/internshipRoutes');
const traineeRoute = require('./routes/traineeRoute');
const supervisorRouter = require('./routes/supervisorRoutes');
const rapportRouter = require('./routes/rapportRoutes');
const optionsRouter = require('./routes/optionsRoutes');
const searchRouter = require('./routes/searchRoutes');
const session = require('express-session');
const User = require('./models/userModel');
const tools = require('./config/tools');
const i18n = require('i18n-nodejs');
const translate = new i18n("en", tools.config.langFile);
const path = require("path");

/** Main Application */
const app  = express();

if(process.env.NODE_ENV==='development') {
    app.use(morgan('dev'));
}

if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'))
}


app.use(compression())

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authoriuzation');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({ });
    }
    next();
});

app.use(express.json());

app.use((req, res, next) => {
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString;
    next();
});
 
 
app.use('/lang', async (req,res,next) => {
    const {lang} = req.body;
    await User.updateMany({}, {$set: {lang:lang}});
    res.status(200).json({message:translate.__('successStatus')});
    next();
});

app.use('/users', userRouter);

app.use('/internship', internshipRouter);

app.use('/trainees', traineeRoute);

app.use('/supervisor', supervisorRouter);

app.use('/options', optionsRouter);

app.use('/rapports', rapportRouter);

app.use('/search', searchRouter);



module.exports = app;