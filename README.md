# A CRUD RESTful API Server

This project implements an **Express.js** API server following REST pattern. It uses a **.json** file for reading, writing and persisting data.

## Resources

1. products

### Product Model

```
{
  id: String!,
  name: String!,
  price: Number!
}
```

### Response Error

```
{
  success: false,
  error: {
    code: [HTTP Code],
    info: String
  }
}
```

## API endpoints (url + http method)

1. **GET _/api/products_**

| STATUS | RESPONSE    |
| ------ | ----------- |
| 200 OK | [Product!]! |

2. **GET _/api/products/:productId_**

| STATUS        | RESPONSE | REMARKS            |
| ------------- | -------- | ------------------ |
| 200 OK        | Product! | `productId` exists |
| 404 NOT FOUND | Error    |

3. **POST** _/api/products_

| STATUS          | RESPONSE               | PAYLOAD                           | REMARKS                                                                              |
| --------------- | ---------------------- | --------------------------------- | ------------------------------------------------------------------------------------ |
| 201 CREATED     | newly created Product! | `{name: String!, price: Number!}` | Currently only checking if both `name` and `price` fields exists in the Request body |
| 400 BAD REQUEST | Error                  |                                   | If data is not received in correct format                                            |

4. **PATCH** _/api/products_

| STATUS        | RESPONSE         | PAYLOAD                         | REMARKS                                                   |
| ------------- | ---------------- | ------------------------------- | --------------------------------------------------------- |
| 200 OK        | updated Product! | `{name: String, price: Number}` | Currently no validation is performed on Request body data |
| 404 NOT FOUND | Error            |                                 | If `productId` doesn't exist                              |

5. **DELETE** _/api/products_

| STATUS        | RESPONSE         | REMARKS                      |
| ------------- | ---------------- | ---------------------------- |
| 200 OK        | deleted Product! |                              |
| 404 NOT FOUND | Error            | If `productId` doesn't exist |

## Scripts

1. `yarn install` -- To install product dependencies
2. `yarn fake [-n]` -- To generate fake products data and store in `products.json` file. By default the script generates 5 fake products. You can provides optional argument `-n` to specify the number of products to generate

3) `yarn compile` -- To compile code using **Babel** in watch mode

4) `yarn start` -- To start server in watch mode at **localhost:3000**
