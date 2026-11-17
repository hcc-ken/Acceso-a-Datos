const Evento = require('../models/evento.model');

const eventoCtrl = {};

eventoCtrl.getEventos = async (req, res) => {
    await Evento.find()
        .then(data => {
            res.status(200).json({
                status: true,
                eventos: data,
                message: 'Evento creado'
            })
        })

        .catch(err => {
            res.status(400).json({
                status: false,
                message: err.message
            })
        });
}

eventoCtrl.getEventosById = async (req, res) => {
    await Evento.findById(req.params.id)
        .then((data) => {
            if (data) {
                res.status(200).json({
                    status: true,
                    evento: data
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

eventoCtrl.addEventos = async (req, res) => {
    const evento = new Evento(req.body);
    await evento.save()
        .then((data) => {
            res.status(201).json({
                status:true,
                message: 'Evento creado'
            })
        })
        .catch((err) => {
            res.status(400).json({
                status: false,
                message: err.message
            })
        })
}

eventoCtrl.updateEventos = async (req, res) => {
    await Evento.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true}
    )
        .then(data => {
            if (data) {
                res.status(200).json({
                    status: true,
                    message: 'Evento creado',
                    evento: data
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

eventoCtrl.deleteEventos = async (req, res) => {
    await EventoModel.findByIdAndDelete(req.params.id)
}

eventoCtrl.findEventoByNombre = async (req, res) => {
    await Evento.find({
        nombre: {$regex: req.params.nombre},
    })
        .then((data) => {
            if (data) {
                res.status(200).json({
                    status: true,
                    evento: data
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

module.exports = eventoCtrl;