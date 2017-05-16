const express    = require('express');
const router     = express.Router();

const candidates = require('../controllers/candidates');

router.route('/')

router.route('/candidates')
  .get(candidates.index)
  .post(candidates.create);
router.route('/candidates/:id')
  .get(candidates.show)
  .put(candidates.update)
  .delete(candidates.delete);

module.export = router;
