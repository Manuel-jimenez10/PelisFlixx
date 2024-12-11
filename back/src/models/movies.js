const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    year: {
        type: Number
    },
    director: String,
    duration: String,
    genre: Array,
    rate: {
        type: Number,
        min: 0,
        max: 10,
        get: (v) => v.toFixed(1),
        set: (v) => v.toFixed(1),
    },
    poster: {
        type: String
    },
});

const Movie = mongoose.model("Movie", MoviesSchema);

module.exports = Movie;