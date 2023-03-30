const express = require("express");
const eventcontroller = require("../controller/eventcontroller"); 

const router = express.Router();

router.route('/').get(eventcontroller.Allevent)
                 .post(eventcontroller.enevtCreate);
                 
router.route('/:id').get(eventcontroller.getOneevent)
                    .patch(eventcontroller.updateEvent)
                    .delete(eventcontroller.deleteEvent);

module.exports = router; 