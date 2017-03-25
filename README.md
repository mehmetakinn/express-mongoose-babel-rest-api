# express-mongoose-babel-rest-api

This is REST API using Node.js, Express.js framework, Mongoose.js for MongoDB and Babel.js for ES6.




## Installation
```sh
  $ git clone git@github.com:mehmetakinn/express-mongoose-babel-rest-api.git
  $ cd express-mongoose-babel-rest-api
  $ npm install
  $ npm start
```



## Endpoints
##### `POST /drivers`
```
POST request to /drivers will creates new driver
{
  "name": "John Doe",
  "latitude": "40.98741409",
  "longitude" "29.02519226"
}
```


##### `GET /drivers`
```
GET request to /drivers will lists drivers
```


##### `GET /drivers/:id`
```
GET request to /drivers/58d66cbbf3c1dc11a711ffb6 will return driver
```


##### `PUT /drivers/:id`
```
PUT request to /drivers/58d66cbbf3c1dc11a711ffb6 will update driver information
{
  "latitude": "40.9824899",
  "longitude" "29.02862549"
}
```


##### `DELETE /drivers/:id`
```
DELETE request to /drivers/58d66cbbf3c1dc11a711ffb6 will delete driver
```


##### `GET /ride`
```
GET request to /ride?latitude=40.98300825&longitude=29.022789&limit=5 will return nearest 5 drivers.

Note: limit is optional and default value is 3.
```


## License

[MIT](https://github.com/mehmetakinn/express-mongoose-babel-rest-api/blob/master/LICENSE)