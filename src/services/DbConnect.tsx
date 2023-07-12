import { MongoClient,ServerApiVersion } from 'mongodb';

let db:{}
const DbConnect =async () => {
    if(db){
        return db
    }
 try {
    const uri = `mongodb+srv://${process.env.Mongo_User}:${process.env.Mongo_Key}@cluster0.df7drrh.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
 } catch (error:any) {
    console.log(error.message)
 }
};

export default DbConnect;