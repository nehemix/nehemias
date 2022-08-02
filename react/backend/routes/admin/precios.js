var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/precios', {
    layout: 'admin/layout',
    persona: req.session.nombre
  });
});

module.exports = router;