const mongoose = require("mongoose");

const alphabetSchema = new mongoose.Schema({
  alphabet: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    require: true,
  },
});

const Alphabet = mongoose.model("Alphabet", alphabetSchema);

module.exports = Alphabet;