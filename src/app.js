const express = require("express");
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const ingresoRoute = require('./routes/ingreso.routes');
const egresoRoute = require('./routes/egreso.routes');
const prestamoRoute = require('./routes/prestamo.routes');
const ahorroRoute = require('./routes/ahorro.routes');
const balanzaRoute = require('./routes/balanza.routes');

const app = express();

app.set("port", process.env.PORT || 5000);
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/ingresos', ingresoRoute);
app.use('/api/egresos',  egresoRoute);
app.use('/api/prestamos', prestamoRoute);
app.use('/api/ahorros', ahorroRoute);
app.use('/api/balanza', balanzaRoute);

module.exports = app;