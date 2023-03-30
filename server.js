const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({path: './.env'});

const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{console.log('Database connected successfully...')});

const Port = process.env.Port || 3000;

const server = app.listen(Port, ()=>{
    console.log(`Server is running on ${Port} port`)
});