const { Router } = require('express');
const {
  clientsActions: { getClients, getClientsById, getClientsByUsername },
} = require('../actions');

const router = Router();

router.get('/id=:id', (req, res) => {
  const {
    params: { id },
  } = req;

  getClientsById(id)
    .then((client) => res.status(200).send(client))
    .catch((error) => res.status(400).send(error));
});

router.get('/name=:name', (req, res) => {
  const {
    params: { name },
  } = req;

  getClientsByUsername(name)
    .then((client) => res.status(200).send(client))
    .catch((error) => res.status(400).send(error));
});

router.get('/', (req, res) => {
  getClients()
    .then((clients) => res.status(200).send(clients))
    .catch((error) => res.status(400).send(error));
});

module.exports = router;
