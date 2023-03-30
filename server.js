const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({path: './.env'});

const Port = process.env.Port || 3000;

const server = app.listen(Port, ()=>{
    console.log(`Server is running on ${Port} port`)
});