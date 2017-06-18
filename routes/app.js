const express = require('express')
const Coder = require('../models/coder');
const router = express.Router()

router.get('/coders', function (req, res) {
  // res.send({type: 'GET'})
  Coder.geoNear(
    {type: 'Point', coordinates: [parseFloat(req.query.lat), parseFloat(req.query.lng)]},
    {masDistance: 10, spherical: true}
  ).then(function(coder){
    res.send(coder)
  })
})

router.post('/coders', function (req, res, next) {
  Coder.create(req.body).then(function (coder) {
    res.send(coder)
  }).catch(next) //next goes to next middleware
})

router.put('/coders/:id', function (req, res) {
  Coder.findByIdAndUpdate({_id:req.params.id}, req.body).then(function () {
    Coder.findOne({_id: req.params.id}).then(function (coder) {
      res.send(coder)
    })
  })
})

router.delete('/coders/:id', function (req, res) {
  Coder.findByIdAndRemove({_id: req.params.id}).then(function (coder) {
    res.send(coder)
  })
})

module.exports = router
