const express = require('express');
const router  = express.Router();

const candidates = require('../controllers/candidates');

router.route('/')
router.route('/candidates')
  .get(candidates.index)
  .post(candidates.create);


module.export = router;
