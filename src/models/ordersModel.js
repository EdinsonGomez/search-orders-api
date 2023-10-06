const ordersJSON = require('../../db-data/orders.json');
const clientsModel = require('./clientsModel');
const productsModel = require('./productsModel');

const matchField = (field, obj) => {
  const fieldKey = Object.keys(field)?.[0];
  if (!fieldKey) return false;

  if (typeof obj[fieldKey] === 'object') {
    return matchField(field, obj[fieldKey]);
  } else {
    return `${obj[fieldKey]}` === `${field[fieldKey]}`;
  }
}

class ordersModel {
  #populateList(list) {
    const orders = list.map((o) => {
      const order = {...o};
      order.client = clientsModel.findById(o.client);
      order.products = order.products.map((p) => ({
        ...p,
        product: productsModel.findProductById(p.product)
      }));
      return order;
    })

    return orders
  }

  find() {
    let orders = this.#populateList(ordersJSON);
    return orders
  }

  findById(id) {
    let order = ordersJSON.find((o) => o.id === +id);
    if (!id || !order) return null;

    order = this.#populateList([order]);

    return order[0];
  }

  searchOrder(query) {
    const { document_type, document } = query;

    const client = clientsModel.findByQuery({ document_type, document });
    
    if (!client) return {};
    
    let order = ordersJSON.find((o) => (
      +o.order === +query.order &&
      +o.client === +client.id
    ));

    if (order) {
      order = this.#populateList([order])?.[0];
    }

    return order 
  }
}

module.exports = new ordersModel();