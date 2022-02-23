const Movie = require("../model/Movie");
const createMovie = async (req, res) => {
  try {
    const { title, director, runtime, rating, description } = req.body;
    const newMovie = new Movie({
      title: title,
      director: director,
      runtime: runtime,
      rating: rating,
      description: description,
    });
    const savedMovie = await newMovie.save();
    res.status(200).json({
      message: "Movie saved successfully",
      payload: savedMovie,
    });
  } catch (error) {
    if (error.code === 11000) {
      message: "error";
      error: `duplicate for the title ${error.keyValue.title}`;
    }
    res.status(500).json({
      message: "There’s an error",
      error: error.error.title.message,
    });
  }
};
const getAllMovies = async (req, res) => {
  try {
    let allMovies = await Movie.find();
    res.status(200).json({ payload: allMovies });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getOneMovie = async (req, res) => {
  try {
    const { id } = req.params;
    let oneMovieId = await Movie.findById(id);
    res.status(200).json({ payload: oneMovieId });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    let deleteOneMovie = await Movie.findByIdAndDelete(id);
    if (deleteOneMovie === null) {
      throw new Error("No movie of that id was found!");
    }
    res
      .status(200)
      .json({ message: "Movie was deleted", payload: deleteOneMovie });
  } catch (error) {
    res.status(500).json({
      message: "There’s an error",
      error: error.message,
    });
  }
};
const updateMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    let updateMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updateMovie === null) {
      throw new Error("No movie of that id was found!");
    }
    res
      .status(200)
      .json({ message: "Movie was updated", payload: updateMovie });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};
module.exports = {
  createMovie,
  getAllMovies,
  getOneMovie,
  deleteById,
  updateMovieById,
};
