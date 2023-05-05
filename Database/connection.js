const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);

const findAll = async () => {
    const database = client.db("ecommerce");
    const collection = database.collection("ecomstore");
    await client.connect();
    const dbResponse = await collection.find().toArray();
    await client.close();
    return dbResponse; 
}
const findbestAll = async () => {
    const database = client.db("ecommerce");
    const collection = database.collection("bestseller");
    await client.connect();
    const dbResponse = await collection.find().toArray();
    await client.close();
    console.log(dbResponse)
    return dbResponse; 
}




module.exports= {findAll,findbestAll}