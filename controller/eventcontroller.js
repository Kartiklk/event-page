const Event = require("../models/eventpage");

exports.enevtCreate = async(req, res, next)=>{
    const event = await Event.create(req.body);

    res.status(200).json({
        status:'success',
        data:{
            event
        }
    })
}

exports.Allevent = async(req, res, next) =>{
    const event = await Event.find();

    res.status(200).json({
        status:'success',
        data:{
            event
        }
    })
}

exports.getOneevent= async(req, res, next) => {
    const event = await Event.findById(req.params.id);

    res.status(200).json({
        status:'success',
        data:{
            event
        }
    })
}

exports.updateEvent = async(req, res, next) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    });

    res.status(200).json({
        status:'success',
        data:{
            event
        }
    })
}

exports.deleteEvent = async(req, res, next) => {
    const event = await Event.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status:'success',
        data:'Deleted successfully...'
    })
}