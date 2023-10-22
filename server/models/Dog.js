const mongoose = require("mongoose");
const { Placeholder } = require("react-bootstrap");

const dogSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  breed: String,
  age: String,
  city: {
    enum: [
      "Hyderabad",
      "Bengalore",
      "Chennai",
      "New Delhi",
      "Mumbai",
      "Kolkata",
      "Ahmedabad",
      "Pune",
      "Surat",
      "Lucknow",
    ],
  },
  sex: {
    enum: ["Male", "Female"],
  },
  upload: [String],
});

const DogModel = mongoose.model("Dog", dogSchema);

module.exports = DogModel;
