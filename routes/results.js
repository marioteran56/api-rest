var express = require('express');
var router = express.Router();

const controller = require('../controllers/results')

// GET
router.get('/:n1/:n2', controller.sumar);

// POST
router.post('/', controller.multiplicar);

// PUT
router.put('/', controller.dividir);

// PATCH
router.patch('/', controller.potencia);

// DELETE
router.delete('/:n1/:n2', controller.restar);

module.exports = router;
