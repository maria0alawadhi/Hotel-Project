const router = require('express').Router()
const reservCtrl = require('../controllers/reservations')

router.get('/reservations', reservCtrl.GetReservs)
router.get('/reservations/:id', reservCtrl.GetReserv)
router.put('/reservations/:id', reservCtrl.edit)
router.delete('/reservations/:id', reservCtrl.delete)
router.post('/reservation', reservCtrl.createRes)

module.exports = router
