const userModel = require("../models/user-model")
// Adjust the path as needed

const getAllEvents = async (req, res) => {
    const events = await userModel.find({})
    return res.status(200).json(events);
}
const createEvent = async (req, res) => {
    try {
        const { title, description, list,time,duration,notes } = req.body;
       

        const newUser = new userModel({
           title: title,
           description: description,
           list: list,
           time: time,
           duration: duration,
           notes: notes,
        });
        const savedUser = await newUser.save();

        return res.status(200).json(savedUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to register user" });
    }
};



module.exports = { getAllEvents, createEvent, };