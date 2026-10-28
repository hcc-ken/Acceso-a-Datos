const Aire = require('./models/aire.model');

const aireCtrl = {};

aireCtrl.addAire = async (req, res) => {
    const miAire = new Aire(req.body);
    await miAire.save()
    .then((data) => {
        res.status(201).json({
            status: true,
            message: 'Aire added successfully',
        })
    })
        .catch((err) => {
            res.status(400).json({
                status: false,
                message: err.message
            })
        })
}

aireCtrl.getAires = async (req, res) => {
    await Aire.find()
        .then(data => {
            res.status(200).json({
                status: true,
                aires: data
            })
        })
    .catch(err => {
        res.status(400).json({
            status: false,
            message: err.message
        })
    })
}

aireCtrl.getAireById = async (req, res) => {
    await Aire.findById(req.params.id)
        .then((data) => {
            if (data) {
                res.status(200).json({
                    status: true,
                    movie: data
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Not Found'
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                status: false,
                message: err.message

            })
        })
}

aireCtrl.updateAire = async (req, res) => {
    await Aire.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    )
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Aire updated',
                    aire: data
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Aire not found'
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

aireCtrl.deleteAire = async (req, res) => {
    await AireModel.findByIdAndDelete(req.params.id)
}

aireCtrl.getByAll = async (req, res) => {
    await Aire.find({
        $or: [
            {marca: {$regex: req.params.dato}},
            {modelo: {$regex: req.params.dato}},
            {color: {$regex: req.params.dato}},
            {energia: {$regex: req.params.dato}},
        ]
    })
        .then((data) => {
            if (data) {
                res.status(200).json({
                    status: true,
                    movie: data
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Not Found'
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                status: false,
                message: err.message

            })
        })
}

aireCtrl.getByModelo= async (req, res) => {
    await Aire.find({
        modelo: {$regex: req.params.modelo},
    })
        .then((data) => {
            if (data) {
                res.status(200).json({
                    status: true,
                    movie: data
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Not Found'
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                status: false,
                message: err.message

            })
        })
}

aireCtrl.getByPrecio= async (req, res) => {
    await Aire.find({
        precio: {$regex: req.params.precio},
    })
        .then((data) => {
            if (data) {
                res.status(200).json({
                    status: true,
                    movie: data
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Not Found'
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                status: false,
                message: err.message

            })
        })
}

aireCtrl.getByModDesc= async (req, res) => {
    await Aire.find({
        modelo: {$regex: req.params.dato},
        descripcion: {$regex: req.params.dato},
    })
        .then((data) => {
            if (data) {
                res.status(200).json({
                    status: true,
                    movie: data
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: 'Not Found'
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                status: false,
                message: err.message

            })
        })
}



module.exports = aireCtrl