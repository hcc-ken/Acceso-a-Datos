const express = require('express');
const aireCtrl = require('../controllers/aires.controller');
const router = express.Router();

// Estar muy atentos con la ruta. Es muy importante que las rutas sean las que pidan el ejercicio.
router.post('/nuevoAire', aireCtrl.addAire); //POST para insertar informacion
router.get('/misAires', aireCtrl.getAires);
router.get('idAire:id', aireCtrl.getAireById);// los dos puntos muy importantes para pasar por parámetro el id especificamente
router.delete('/borrar/:id', aireCtrl.deleteAire);
router.get('/buscar/:dato', aireCtrl.getByAll);
router.get('/precio/:precio', aireCtrl.getByPrecio);
router.get('/precio/:modelo', aireCtrl.getByModelo);
router.get('/precio/:dato', aireCtrl.getByModDesc);

module.exports = router;