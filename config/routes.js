const express    = require('express');
const router     = express.Router();

const candidates = require('../controllers/candidates');
const clients     = require('../controllers/clients')

router.route('/')
  .get(clients.index);

router.route('/clients')
  .get(clients.index);
  .post(clients.create);
router.route('/clients/:id')
  .get(candidates.show)
  .put(candidates.update)
  .delete(candidates.delete);

router.route('/candidates')
  .get(candidates.index)
  .post(candidates.create);
router.route('/candidates/:id')
  .get(candidates.show)
  .put(candidates.update)
  .delete(candidates.delete);

module.export = router;
