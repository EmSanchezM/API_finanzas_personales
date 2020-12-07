const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

const { getPrestamos, createPrestamo, deletePrestamo } = require('../controllers/prestamo.controller');

router.get('/', getPrestamos);

router.post('/', [
    check('quantity_money', 'la cantidad de dinero es obligatorio').not().isEmpty(),
    check('quantity_time', 'la cantidad de tiempo es obligatoria').not().isEmpty(),
    check('duration', 'la duracion es obligatoria').not().isEmpty(),
    check('interest_rate', 'la tasa de interes es obligatoria').not().isEmpty(),
    check('payment_type', 'la forma de pago es obligatoria').not().isEmpty(),
    validarCampos
], createPrestamo);

router.delete('/:prestamo_id', deletePrestamo);

module.exports = router;