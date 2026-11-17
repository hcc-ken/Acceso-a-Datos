const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./database');

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/GestionEventos/Eventos', require('./routes/evento.route'))
app.use('/', (req, res) => {res.json({message: 'La API está en  /api/v1/GestionEventos/Eventos'})});
app.listen(app.get('port'), () => {
    console.log('Listening on port ' + app.get('port'));
});