const clientsJSON = require('../../db-data/clients.json');
const documentTypes = {
  CEDULA_CIUDADANIA: 'Cedula de ciudadania',
  CEDULA_EXTRANJERIA: 'cedula de extranjeria',
  PASAPORTE: 'Pasaporte'
}

class clientModel {
  find() {
    return clientsJSON;
  }

  findById(id) {
    const client = clientsJSON.find((client) => client.id === +id);
    return client
  }
  
  findByQuery(query) {
    const queryKeys = Object.keys(query);

    if (!queryKeys.length) return null;

    const client = clientsJSON.find((c) => (
      queryKeys.every((key) => `${query[key]}` === `${c[key]}`)
    ));

    return client;
  }
  findDocumentType() {
    return documentTypes;
  }
};

module.exports = new clientModel();
