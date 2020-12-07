const { response } = require('express');

const Ahorro = require('../models/ahorro.model');

const ahorroController = {};

ahorroController.getAhorros = async(req, res=response)=>{
    const ahorros = await Ahorro.find();
    return res.status(200).json(ahorros);
}

ahorroController.createAhorro = async(req, res=response)=>{
    const {fijo_mensual, quantity_time, duration, interest_rate, payment_type } = req.body;
    try {
        const newAhorro = new Ahorro({
            fijo_mensual,
            quantity_time,
            duration,
            interest_rate,
            payment_type
        });

        await newAhorro.save();

        res.status(201).json({
            ok:true,
            message: 'Ahorro agregado exitosamente',
            newAhorro
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: 'Error inesperado, revisa Logs'
        });
    }
}

ahorroController.deleteAhorro = async(req, res=response)=>{
    const id = req.params.Ahorro_id;
    try {
        const ahorro = await Ahorro.findById(id);
        if(!ahorro){
            return res.status(404).json({
                ok:false,
                message: 'No existe Ahorro con ese ID'
            });
        }
        
        await Ahorro.findByIdAndDelete(id);

        res.status(200).json({
            ok:false,
            message: 'Ahorro eliminado'
        });

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: 'No se ha eliminado. Error Server, revisa logs'
        })       
    }
}

module.exports = ahorroController;