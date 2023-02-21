# what is an orm?

An ORM is an Object Relational Mapper. It is a library that allows you to interact with a database using objects. It is a way to interact with a database without writing SQL.

# what is an odm?

An ODM is an Object Document Mapper. It is a library that allows you to interact with a database using objects. It is a way to interact with a database without writing SQL.

# what is the difference between an orm and an odm?

An ORM is a library that allows you to interact with a relational database using objects. An ODM is a library that allows you to interact with a document database using objects.

# what is a database?

A database is a collection of data. It is a way to store data in a structured way. It is a way to store data in a way that is easy to access and manipulate.

# what is nosql?

NoSQL is a database that does not use SQL. It is a database that does not use tables. It is a database that does not use rows and columns.

# what is mongodb?

MongoDB is a document database. It is a database that stores data in documents. It is a database that stores data in JSON-like documents.

db.createCollection("shop")
db.insertMany([
  {
    name: "shop1",
    address: "address1",
    products: [
      {
        name: "product1",
        price: 10,
        quantity: 10
      },
      {
        name: "product2",
        price: 20,
        quantity: 20
      }
    ]
  },
  {
    name: "shop2",
    address: "address2",
    products: [
      {
        name: "product3",
        price: 30,
        quantity: 30
      },
      {
        name: "product4",
        price: 40,
        quantity: 40
      }
    ]
  }
])

db.shop.find({$lte: {products: {price: 20}}})

# meaning of the following mongodb operators

## $eq

$eq is an operator that matches values that are equal to a specified value.

## $gt

$gt is an operator that matches values that are greater than a specified value.

## $gte

$gte is an operator that matches values that are greater than or equal to a specified value.

## $in

$in is an operator that matches any of the values specified in an array.

## $lt

$lt is an operator that matches values that are less than a specified value.

# odm

An ODM is an Object Document Mapper. It is a library that allows you to interact with a document database using objects. It is a way to interact with a database without writing SQL.

## difference between bson and json

BSON is a binary representation of JSON. It is a binary representation of JSON that is used by MongoDB. It is a binary representation of JSON that is used by MongoDB to store data.

## what is json

JSON is a format for storing and transporting data. It is a format for storing and transporting data. It is a format for storing and transporting data. It is often used when data is sent from a server to a web page.

## what is indexing

Indexing is a way to make queries faster. It is a way to make queries faster. It is a way to make queries faster. It is a way to make queries faster.

## what is difference between sql and nosql

SQL is a relational database. It is a relational database that uses tables. It is a relational database that uses tables and rows. It is a relational database that uses tables and rows and columns. 
NoSQL is a document database. It is a document database that does not use tables. It is a document database that does not use tables and rows. It is a document database that does not use tables and rows and columns.


## findOneAndReplace syntax in mongoose

```js
Model.findOneAndReplace(filter, doc, options, callback)
```

## findOneAndUpdate syntax in mongoose

```js

## what is aggregation

Aggregation is a way to process data from a collection. It is a way to process data from a collection. It is a way to process data from a collection. It is a way to process data from a collection.

## what are pipelines

this is a sequence of stages that is used to process data. It is a sequence of stages that is used to process data. It is a sequence of stages that is used to process data. It is a sequence of stages that is used to process data.

## pipeline 
## sort in acsending order

```js

## sort in descending order

```js

var pipline = [
    {
        $sort: {
        name: -1
        },
        {$limit: 1}
    },
];
db.collection.aggregate(pipeline)
```

## advantages of using mongodb

## what is bson

bson is a binary representation of json. It is a binary representation of json that is used by mongodb. It is a binary representation of json that is used by mongodb to store data.

## what is indexing in mongodb

indexing is a way to make queries faster. It is a way to make queries faster. It is a way to make queries faster. It is a way to make queries faster.

## what is sharding



Full cloud-based developer data platform.
Flexible document schemas.
Widely supported and code-native data access.
Change-friendly design.
Powerful querying and analytics.
Easy horizontal scale-out with sharding.
Simple installation.
Cost-effective.

sharding is a way to distribute data across multiple servers. It is a way to distribute data across multiple servers. It is a way to distribute data across multiple servers. It is a way to distribute data across multiple servers.

## what is a collection

a collection is a group of documents. It is a group of documents that is stored in a database. It is a group of documents that is stored in a database. It is a group of documents that is stored in a database.

## what is a document

a document is a set of key value pairs. It is a set of key value pairs that is stored in a collection. It is a set of key value pairs that is stored in a collection. It is a set of key value pairs that is stored in a collection.


## what is a replica set in mongodb

a replica set is a group of mongod instances that maintain the same data set. It is a group of mongod instances that maintain the same data set. It is a group of mongod instances that maintain the same data set. It is a group of mongod instances that maintain the same data set.

## difference between collection and document in mongodb

a collection is a group of documents. It is a group of documents that is stored in a database. It is a group of documents that is stored in a database. It is a group of documents that is stored in a database.

a document is a set of key value pairs. It is a set of key value pairs that is stored in a collection. It is a set of key value pairs that is stored in a collection. It is a set of key value pairs that is stored in a collection.

## translate switch database to shell command

```js 
use databaseName

## datatypes in mongodb

mongodb supports the following datatypes:

string

integer

float

boolean

date

array

## what is the aggregation framework in MongoDB

the aggregation framework is a way to process data from a collection. It is a way to process data from a collection. It is a way to process data from a collection. It is a way to process data from a collection.

## examples of Aggregation functions 
  
  ```js


  ## What are NoSQL databases

NoSQL databases are databases that do not use tables. It is a database that does not use tables. It is a database that does not use tables and rows. It is a database that does not use tables and rows and columns.

## types of NoSQL databases

There are two types of NoSQL databases:

key-value stores

document stores

## list the four types of NoSQL databases with one example of each

key-value stores: redis

document stores: mongodb

## what is projection in mongodb

projection is a way to limit the fields that are returned by a query. It is a way to limit the fields that are returned by a query. It is a way to limit the fields that are returned by a query. It is a way to limit the fields that are returned by a query.

## create a mongoose schema for a sure with the following fields: name, address, email, phone, password and city

```js 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    address: String,
    email: String,
    phone: String,
    password: String,
    city: {
        type: String,
        default: 'New York'
    }
});


Document databases.
Key-value stores.
Column-oriented databases.
Graph databases.

const User = mongoose.model('User', userSchema);

module.exports = User;












