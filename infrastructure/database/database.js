
const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb+srv://tk:root@cluster0.4zrke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
            .then(conn => global.conn = conn.db("workshoptdc"))
            .catch(err => console.log(err))
           
function findAll() {
    return global.conn.collection("customers").find().toArray();
}

function insert(customer) {
    return global.conn.collection("customers").insertOne(customer);
}

module.exports = { findAll, insert}
