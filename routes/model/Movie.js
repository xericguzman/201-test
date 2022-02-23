const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: String,
    director: String,
    runtime: String,
    rating: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("movie", movieSchema);
