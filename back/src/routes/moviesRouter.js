const express = require("express");
const { getMoviesController, addMovies } = require("../controllers/moviesController");
const moviesRouter = express.Router();

moviesRouter.get("/", getMoviesController);
moviesRouter.post("/", addMovies);

module.exports = moviesRouter;