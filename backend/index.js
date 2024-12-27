const { MongoClient } = require('mongodb');

// MongoDB URI and database name
const uri = "mongodb://localhost:27017";
const dbName = "school";

async function connectMongo() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        
        const db = client.db(dbName);
        
        await client.close();
    } catch (error) {
        console.error(error);
    }
}
connectMongo();