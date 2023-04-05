const mongoose = require("mongoose");

const eventdescSchema = new mongoose.Schema({
        images:[String],
        text:String,
        video:String,
        list:[String],
        joininfo:String,
        orgainsedby:[String],
        tags:[String]
})

const EventDesc = mongoose.model('EventDesc', eventdescSchema);

module.exports = EventDesc;