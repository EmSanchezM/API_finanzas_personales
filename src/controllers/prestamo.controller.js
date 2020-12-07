const { response } = require('express');

const Prestamo = require('../models/prestamos.model');

const prestamoController = {};

prestamoController.getPrestamos = async(req, res=response)=>{
    const prestamos = await Prestamo.find();
    return res.status(200).json(prestamos);
}

prestamoController.createPrestamo = async(req, res=response)=>{
    const {quantity_money, quantity_time, duration, interest_rate, payment_type } = req.body;
    try {
        const newPrestamo = new Prestamo({
            quantity_money,
            quantity_time,
            duration,
            interest_rate,
            payment_type
        });

        await newPrestamo.save();

        res.status(201).json({
            ok:true,
            message: 'Prestamo agregado exitosamente',
            newPrestamo
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: 'Error inesperado, revisa Logs'
        });
    }
}

prestamoController.deletePrestamo = async(req, res=response)=>{
    const id = req.params.prestamo_id;
    try {
        const prestamo = await Prestamo.findById(id);
        if(!prestamo){
            return res.status(404).json({
                ok:false,
                message: 'No existe prestamo con ese ID'
            });
        }
        
        await Prestamo.findByIdAndDelete(id);

        res.status(200).json({
            ok:false,
            message: 'Prestamo eliminado'
        });

    } catch (error) {
        res.status(500).json({
            ok:false,
            message: 'No se ha eliminado. Error Server, revisa logs'
        })       
    }
}

module.exports = prestamoController;