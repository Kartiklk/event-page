const mongoose = require("mongoose");
const validator = require("validator");
const validUrl = require("valid-url");

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Please Enter Title']
    }, 
    url:{
        type:String,
        required:[true, 'Provide a Register Link'],
        validUrl:[validUrl.isUri(this.url), 'Url is not valid']
    },
    date:{
        type:Date,
        required:[true, 'Specify the Date']
    },
    about:{
        type:String,
        required:[true, 'Information about event']
    },
    speaker:[
        {
            name:String,
            aboutspeaker:String,
            photo:String
        },
    ],
    moderoter:{
        name:String,
        aboutmoderoter:String,
        photo:String
    },
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;