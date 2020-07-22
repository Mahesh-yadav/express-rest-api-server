import path from 'path';
import fs from 'fs';
import cuid from 'cuid';

const FILE_URI = path.join(__dirname, '../products.json');

const loadData = () => {
  try {
    const data = fs.readFileSync(FILE_URI);
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, then return []
    return [];
  }
};

const saveData = (data) => {
  fs.writeFileSync(FILE_URI, JSON.stringify(data));
};

export const listProducts = (req, res) => {
  const products = loadData();
  res.status(200);
  res.json(products);
};

export const getProduct = (req, res) => {
  const products = loadData();
  const { productId } = req.params;

  const product = products.find((p) => p.id === productId);

  if (product) {
    res.status(200);
    res.json(product);
  } else {
    res.status(404);
    res.json({
      success: false,
      error: {
        code: 404,
        info: `product does not exist. id: ${productId}`,
      },
    });
  }
};

export const addProduct = (req, res) => {
  const product = req.body;
  const products = loadData();

  if (!product.name || !product.price) {
    res.status(400);
    res.json({
      success: false,
      error: {
        code: 400,
        info:
          'Product data is not valid. [Required format: {name: String!, price: Number!}]',
      },
    });
  } else {
    const id = cuid();
    product.id = id;
    products.push(product);

    saveData(products);

    res.status(201);
    res.json(product);
  }
};
