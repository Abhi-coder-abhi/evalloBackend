const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: { type: String,  },
    description: { type: String,  },
    list: { type: [String], required: true },
    date:{type:String},
    time:{type:String,required: true},
    duration:{type:String,required: true},
    notes: { type:String, required: true}

});
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;