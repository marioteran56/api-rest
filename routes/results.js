var express = require('express');
var router = express.Router();

const controller = require('../controllers/results')

// GET
router.get('/:n1/:n2', controller.sum);

// POST
router.post('/', controller.mult);

// PUT
router.put('/', controller.div);

// PATCH
router.patch('/', controller.pow);

// DELETE
router.delete('/:n1/:n2', controller.sub);

module.exports = router;
