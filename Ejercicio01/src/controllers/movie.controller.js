const Movie = require('../models/movie.model');

const movieCtrl = {};

//CREAR PELICULA
movieCtrl.addMovie = async (req, res) => {
    const myMovie = new Movie(req.body);
    await myMovie.save()
        .then(() => {   //el then es basicamente un try/catch
            res.status(201).json({
                status: true,
                message: 'Movie created successfully'
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: false,
                message: err.message
            })
        })
}


movieCtrl.getMovies = async (req, res) => {
    await Movie.find()
        .then((data) => {
            res.status(200).json({
                status: true,
                movies: data
            })
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

movieCtrl.getMovie = async (req, res) => {
    await Movie.findById(req.params.id)
        .then((data) => {
            if (data) {
                res.status(200).json({
                    status: true,
                    movie: data
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Movie not found'
                })

            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

// ACTUALIZAR UAN PELICULA
movieCtrl.updateMovie = async (req, res) => {
    await Movie.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
    )
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Movie updated',
                    movie: data
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Movie not found'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })

}
// ELIMINAR UNA PELICULA
movieCtrl.deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id)
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Movie deleted'
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Movie not found'
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })

}

movieCtrl.getGenres = async (req, res) => {
    await Movie.find().distinct('genres')
        .then(data => {
            res.status(200).json({
                status: true,
                genres: data
            })
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

movieCtrl.getMoviesByTitle = async (req, res) => {
    await Movie.find({title: {$regex: req.params.title}})
        //const regex = new RegExp(req.params.title, i)
        //await Movie.find({title: $regex})
        .then(data => {
            res.status(200).json({
                status: true,
                movies: data
            })
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message
            })
        })
}

module.exports = movieCtrl;