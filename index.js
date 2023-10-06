const express = require('express');
const cors = require('cors');

const ordersRouter = require('./src/routes/ordersRouter');
const productsRouter = require('./src/routes/productsRouter');
const clientsRouter = require('./src/routes/clientsRouter');

const app = express();
const PORT = 8080;

app.use(cors());
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);
app.use('/clients', clientsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})