const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

const { getEgresos, createEgreso, deleteEgreso } = require('../controllers/egreso.controller');

router.get('/', getEgresos);

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('quantity', 'la cantidad es obligatoria').not().isEmpty(),
    validarCampos
], createEgreso);

router.delete('/:egreso_id', deleteEgreso);

module.exports = router;