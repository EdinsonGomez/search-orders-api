const express = require('express');

const ordersRouter = require('./routes/orders');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})