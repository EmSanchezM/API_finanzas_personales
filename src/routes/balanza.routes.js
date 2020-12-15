const {Router} = require('express');

const router = Router();

const { getBalanza } = require('../controllers/balanza.controller');

router.get('/', getBalanza);


module.exports = router;