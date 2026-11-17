const express = require('express');
const eventoCtrl = require('../controllers/evento.controller');
const router = express.Router();

router.get('/todos', eventoCtrl.getEventos);
router.get('/uno/:id', eventoCtrl.getEventosById);
router.post('/nuevo', eventoCtrl.addEventos);
router.put('/actualizar/:id', eventoCtrl.updateEventos);
router.delete('/borrar/:id', eventoCtrl.deleteEventos);
router.get('/buscar/:nombre', eventoCtrl.findEventoByNombre);

module.exports = router;