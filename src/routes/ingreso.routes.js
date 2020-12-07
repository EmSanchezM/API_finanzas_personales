const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

const { getIngresos, createIngreso, deleteIngreso } = require('../controllers/ingreso.controller');

router.get('/', getIngresos);

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('quantity', 'la cantidad es obligatoria').not().isEmpty(),
    validarCampos
], createIngreso);

router.delete('/:ingreso_id', deleteIngreso);

module.exports = router;