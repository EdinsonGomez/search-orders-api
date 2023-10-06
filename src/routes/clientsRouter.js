const express = require('express');
const clientsController = require('../controllers/clientsController');

const router = express.Router();

router.get("/", (req, res) => clientsController.getClients(req, res));
router.get('/document/types', (req, res) => clientsController.getDocumentTypes(req, res));

module.exports = router;