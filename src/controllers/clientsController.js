const clientsModel = require('../models/clientsModel');

exports.getClients = (req, res) => {
  const clients = clientsModel.find();

  res.status(200).send(clients ?? []);
}

exports.getDocumentTypes = (req, res) => {
  const documentTypes = clientsModel.findDocumentType();
  const types = [];

  if (documentTypes) {
    Object.keys(documentTypes).forEach((key) => {
      types.push({
        label: documentTypes[key],
        value: key
      })
    })
  }

  res.status(200).send(types);
}