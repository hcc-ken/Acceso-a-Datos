const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventoSchema = new Schema({
    nombre: {type: String, required: true},
    fecha: {type: String, required: true},
    lugar: {type: String, required: true},
    descripcion: {type: String, required: true},
}, {versionKey: false, timestamps: true});

module.exports = mongoose.model('Eventos', EventoSchema, 'Eventos');