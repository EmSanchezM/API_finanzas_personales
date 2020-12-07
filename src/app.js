const express = require("express");
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set("port", process.env.PORT || 5000);
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;