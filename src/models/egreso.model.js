const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const Schemma = mongoose.Schema;

const egresoSchemma = Schemma({
    name: {type:String, required:[true, 'El nombre es requerido']},
    quantity: {type:Number, required:[true, 'La cantidad es requerida']}
},{
    versionKey: false
})

egresoSchemma.plugin(uniqueValidator, {message: '{PATH} debe ser unico'});

module.exports = mongoose.model('Egreso', egresoSchemma);