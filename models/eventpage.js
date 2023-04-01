const mongoose = require("mongoose");
const validator = require("validator");
const isUrl = require("isurl");

const eventSchema = new mongoose.GridFs({
    url:{
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
    },
    speaker:[
        {
            name:String,
            aboutspeaker:String,
            photo:String
        }
    ],
    moderoter:{
        name:String,
        aboutmoderoter:String,
        photo:String
    },
    tags:[String],
    desc:{
        type:GridFs,
    }
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;