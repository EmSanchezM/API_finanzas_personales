const { response } = require('express');

const Egreso = require('../models/egreso.model');

const egresoController = {};

egresoController.getEgresos = async(req, res=response)=>{
    const egresos = await Egreso.find();
    return res.status(200).json(egresos);
}

egresoController.createEgreso = async(req, res=response)=>{
    const {name, quantity } = req.body;
    try {
        const newEgreso = new Egreso({
            name,
            quantity
        });

        await newEgreso.save();

        res.status(201).json({
            ok:true,
            message: 'Egreso agregado exitosamente',
            newEgreso
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: 'Error inesperado, revisa Logs'
        });
    }
}

egresoController.deleteEgreso = async(req, res=response)=>{
    const id = req.params.egreso_id;
    try {
        const egreso = await Egreso.findById(id);
        if(!egreso){
            return res.status(404).json({
                ok:false,
                message: 'No existe egreso con ese ID'
            });
        }
        
        await Egreso.findByIdAndDelete(id);

        res.status(200).json({
            ok:false,
            message: 'Egreso eliminado'
        });

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: 'No se ha eliminado. Error Server, revisa logs'
        })       
    }
}

module.exports = egresoController;