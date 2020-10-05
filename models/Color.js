const mongoose = require("mongoose")
const colorSchema = new mongoose.Schema(
    {
        Color:String
}
)
const Color = module.exports = mongoose.model("Color",colorSchema);
