const mongoose = require("mongoose")
const speechSchema = new mongoose.Schema(
    {
        Text:String
}
)
const Speech = module.exports = mongoose.model("Speech",speechSchema);
