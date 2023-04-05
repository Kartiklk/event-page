const express = require("express");
const desccontroller = require("../controller/desccontroller"); 

const router = express.Router();

router.route('/').get(desccontroller.Alldesc)
                 .post(desccontroller.newImages, desccontroller.Images, desccontroller.descCreate);
                 
router.route('/:id').get(desccontroller.getOnedesc)
                    .patch(desccontroller.newImages, desccontroller.Images, desccontroller.updatedesc)
                    .delete(desccontroller.deletedesc);

module.exports = router; 