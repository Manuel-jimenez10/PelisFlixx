const Movie = require("../models/movies");

const getMovies = async () => {
    return await Movie.find()
};

const postMovies = async (movie) => {

    movie.rate = Number(movie.rate)
    const newMovie = new Movie(movie)

    return await newMovie.save();
}

module.exports = {getMovies, postMovies};