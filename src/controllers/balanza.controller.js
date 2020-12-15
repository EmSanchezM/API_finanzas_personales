const { response } = require('express');

const Ingreso = require('../models/ingreso.model');
const Egreso = require('../models/egreso.model');

const balanzaController = {};

balanzaController.getBalanza = async(req, res=response)=>{
    try {
        const ingresos = await Ingreso.find();
        const egresos = await Egreso.find();

        const balanza = {
            totalIngresos: 0,
            totalEgresos: 0,
            diferencial: 0
        }

        ingresos.map(ingreso=>{
            balanza.totalIngresos = balanza.totalIngresos + ingreso.get('quantity')
        });

        egresos.map(egreso=>{
            balanza.totalEgresos += egreso.get('quantity')
        });

        balanza.diferencial = (balanza.totalIngresos - balanza.totalEgresos);

        return res.status(200).json({
            ok:true,
            balanza: balanza
        });

    } catch (error) {
        return res.status(500).json({
            ok:false,
            message: 'ERROR DATABASE ', error
        })
    }
    

}

module.exports = balanzaController;