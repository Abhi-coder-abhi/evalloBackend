const express = require("express")
const router = express.Router()
const {getAllEvents, createEvent} = require("../controllers/event")
router.route("/events").get(getAllEvents)
router.route("/create-event").post(createEvent)

module.exports = router;