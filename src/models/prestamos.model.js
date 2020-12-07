const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const Schemma = mongoose.Schema;

const prestamoSchemma = Schemma({
    quantity_money: {type:Number, required:[true, 'La cantidad de dinero es requerida']},
    quantity_time: {type:Number, required:[true, 'La cantidad de tiempo es requerida']},
    duration: {type:String, required:[true, 'La duracion es requerida']},
    interest_rate: {type:Number, required:[true, 'La tasa de interes es requerida']},
    payment_type: {type:String, required:[true, 'El tipo de pago es requerido']}
},{
    versionKey: false
})

prestamoSchemma.plugin(uniqueValidator, {message: '{PATH} debe ser unico'});

module.exports = mongoose.model('Prestamo', prestamoSchemma);