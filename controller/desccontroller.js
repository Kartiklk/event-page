const EventDesc = require("../models/eventpagedesc");
const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();

const upload = multer({
  storage: multerStorage
});

exports.newImages = upload.fields([
  { name: 'images', maxCount: 3 }
]);

exports.Images = async(req, res, next) => {
  if (!req.files.images) return next();
  
  req.body.images = [];
await Promise.all(
  req.files.images.map(async (file, i) => {
    const filename = `event-${Date.now()}-${i + 1}.jpeg`;

    await sharp(file.buffer)
    .toFormat('jpeg')
    .toFile(`public/img/${filename}`);


  req.body.images.push(filename);
})
);
next();
};

exports.descCreate = async(req, res, next)=>{
    const event = await EventDesc.create(req.body);

    res.status(200).json({
        status:'success',
        data:{
            event
        }
    })
}

exports.Alldesc = async(req, res, next) =>{
    const event = await EventDesc.find();

    res.status(200).json({
        status:'success',
        data:{
            event
        }
    })
}

exports.getOnedesc= async(req, res, next) => {
    const event = await EventDesc.findById(req.params.id);

    res.status(200).json({
        status:'success',
        data:{
            event
        }
    })
}

exports.updatedesc = async(req, res, next) => {
    const event = await EventDesc.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    });

    res.status(200).json({
        status:'success',
        data:{
            event
        }
    })
}

exports.deletedesc = async(req, res, next) => {
    const event = await EventDesc.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status:'success',
        data:'Deleted successfully...'
    })
}