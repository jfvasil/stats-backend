const express = require('express')
const router = express.Route()
const calcController = require('../controllers/calcController')

router.get('/', calcController.getData)

router.post('/', calcController.postData )


module.exports = router