var express = require('express');
var router = express.Router();
const { createMovie, getAllMovies, getOneMovie, deleteById, updateMovieById } = 
require("../controller/movieController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/create-movie", createMovie);
router.get("/get-all-movie", getAllMovies);
router.get("/get-one-movie/:id", getOneMovie);
router.delete("/delete-by-id/:id", deleteById);
router.put("/update-movie/:id", updateMovieById);


module.exports = router;