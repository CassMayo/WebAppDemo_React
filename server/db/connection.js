import {MongoClient, ServerApiVersion} from "mongodb"

const uri = process.env.ATLAS_URI || "none";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    },
});

try {

    console.log("🎇 Trying to connect to atlas DB with URI:", uri)

    await client.connect();

    await client.db("admin").command({ping:1});
    console.log(
        "✨ Pinged deployment. Successfully connected to MongoDB"
    );  
} catch(err){
    console.error(err);
}

let db = client.db("listings")

export default db;