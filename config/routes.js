const express = require('express');
const router  = express.Router();

const candidates = require('../controllers/candidates');

router.route('/')
  .get(candidates.index);


module.export = router;
