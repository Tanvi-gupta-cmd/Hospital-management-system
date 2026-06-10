const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");


router.post("/", async (req, res) => {
    const appointment = await Appointment.create(req.body);
    res.json(appointment);
});

router.get("/", async (req, res) => {
    const appointments = await Appointment.find();
    res.json(appointments);
});

router.delete("/:id", async (req, res) => {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment Deleted" });
});

module.exports = router;