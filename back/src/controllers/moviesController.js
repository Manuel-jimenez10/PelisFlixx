const {getMovies, postMovies} = require("../services/moviesServices");

const getMoviesController = async (req, res) => {
    try {
        const movies = await getMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
};

const addMovies = async (req, res) => {
    try {
        console.log(req.body);
        const movie = await postMovies(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
};


module.exports = {getMoviesController, addMovies};