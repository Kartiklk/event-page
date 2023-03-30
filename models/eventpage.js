const { link } = require("fs");
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    registerlink:{
        type:String,
        required:[true, 'Provide a Register Link']
    },
    date:{
        type:Date,
        required:[true, 'Specify the Date']
    },
    about:{
        type:String,
        required:[true, 'Information about event']
    }
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;