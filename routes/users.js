var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/add', function (req, res, next) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phone = req.body.phone;
  console.warn('add', firstName, lastName, phone);

  res.json({
    success: true,
    message: 'TODO'
  });
});

module.exports = router;
