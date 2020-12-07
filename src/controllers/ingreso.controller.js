const { response } = require('express');

const Ingreso = require('../models/ingreso.model');

const ingresoController = {};

ingresoController.getIngresos = async(req, res=response)=>{
    const ingresos = await Ingreso.find();
    return res.status(200).json(ingresos);
}

ingresoController.createIngreso = async(req, res=response)=>{
    const {name, quantity } = req.body;
    try {
        const newIngreso = new Ingreso({
            name,
            quantity
        });

        await newIngreso.save();

        res.status(201).json({
            ok:true,
            message: 'Ingreso agregado exitosamente',
            newIngreso
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: 'Error inesperado, revisa Logs'
        });
    }
}

ingresoController.deleteIngreso = async(req, res=response)=>{
    const id = req.params.ingreso_id;
    try {
        const ingreso = await Ingreso.findById(id);
        if(!ingreso){
            return res.status(404).json({
                ok:false,
                message: 'No existe ingreso con ese ID'
            });
        }
        
        await Ingreso.findByIdAndDelete(id);

        res.status(200).json({
            ok:false,
            message: 'Ingreso eliminado'
        });

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: 'No se ha eliminado. Error Server, revisa logs'
        })       
    }
}

module.exports = ingresoController;