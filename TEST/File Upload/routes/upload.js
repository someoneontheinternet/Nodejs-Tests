var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../tmp/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + ".jpg");
  }
})

var upload = multer({ storage: storage })

router.get('/', function(req, res) {
  res.render('home');
});

router.post('/', upload.any(), function(req, res, next) {
  res.send(req.files);
});

module.exports = router;
