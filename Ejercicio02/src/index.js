const express = require("express"); //importamos TODOS los módulos
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./database");

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//app.use('/api/v2/airespepito/misAires', require('./routes/aires.route'))

app.use('/', (req, res) => {res.json({message: 'La API está en /api/v2/airespepito/misAires'})});

app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
});