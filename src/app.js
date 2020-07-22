import express from 'express';
import path from 'path';
import productsRouter from './routers/products';

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server started at: localhost:${PORT} ....`);
});
