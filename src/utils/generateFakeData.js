import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker';
import cuid from 'cuid';

const FILE_URI = path.join(__dirname, '../', 'products.json');

const products = [];

for (let i = 0; i < 5; i++) {
  const id = cuid();
  const name = faker.commerce.product();
  const price = Number(faker.commerce.price());

  products.push({
    id,
    name,
    price,
  });
}

fs.writeFileSync(FILE_URI, JSON.stringify(products));

console.log('Data generated.');
