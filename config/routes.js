const express = require('express');
const router  = express.Router();

const candidates = require('../controllers/candidates');

router.route('/')
router.route('/users')
  .get(candidates.index)
  .post(candidates.create);


module.export = router;
