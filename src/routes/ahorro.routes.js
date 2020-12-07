const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

const { getAhorros, createAhorro, deleteAhorro } = require('../controllers/ahorro.controller');

router.get('/', getAhorros);

router.post('/', [
    check('fijo_mensual', 'la cantidad de dinero es obligatorio').not().isEmpty(),
    check('quantity_time', 'la cantidad de tiempo es obligatoria').not().isEmpty(),
    check('duration', 'la duracion es obligatoria').not().isEmpty(),
    check('interest_rate', 'la tasa de interes es obligatoria').not().isEmpty(),
    check('payment_type', 'la forma de pago es obligatoria').not().isEmpty(),
    validarCampos
], createAhorro);

router.delete('ahorro_id', deleteAhorro);

module.exports = router;