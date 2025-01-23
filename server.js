const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env'});

/**
 * CONNECTION TO DATABASE USING MONGOOSE
 */
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('DataBase Connection Successful !'))
.catch(err => console.log(err)); 

 
/**
 * RUNNING THE SERVER
 */
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server Run On PORT : ${port}`);
});