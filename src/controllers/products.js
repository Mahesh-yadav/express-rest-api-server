import path from 'path';
import fs from 'fs';

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

export const listProducts = (req, res) => {
  const products = loadData();
  res.status(200);
  res.set('Content-Type', 'application/json');
  res.end(JSON.stringify(products));
};

export const getProduct = (req, res) => {
  const products = loadData();
  const { productId } = req.params;

  const product = products.find((p) => p.id === productId);

  if (product) {
    res.status(200);
    res.set('Content-Type', 'application/json');
    res.end(JSON.stringify(product));
  } else {
    res.status(404);
    res.set('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        success: false,
        error: {
          code: 404,
          info: `product does not exist. id: ${productId}`,
        },
      })
    );
  }
};
