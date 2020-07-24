/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import faker from 'faker';
import yargs from 'yargs';
import cuid from 'cuid';

yargs.option('n', {
  default: 5,
  describe: 'Numnber of fake products to generate',
  type: 'number',
});

yargs.parse();

const FILE_URI = path.join(__dirname, '../', 'products.json');

const products = [];

const NUMBER_OF_PRODUCTS = yargs.argv.n;

for (let i = 0; i < NUMBER_OF_PRODUCTS; i++) {
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

console.log(`${NUMBER_OF_PRODUCTS} products generated`);
