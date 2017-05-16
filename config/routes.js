const express = require('express');
const router  = express.Router();

const candidates = require('../controllers/candidates');

router.route('/')
  .get(candidates.index);
router.route('/users')
  .get(users.index)
  .post(users.create);


module.export = router;
