import mongoose from "mongoose";

async function mongoConnect(): Promise<unknown> {
    const MONGO_URI = process.env.MONGO_URI || "";
    if (!MONGO_URI.length) {
        throw new Error("MONGO_URI environment variable not set")
    }
    //await mongoose.disconnect();
    let db;
    try {    
        await mongoose.createConnection(MONGO_URI);
        db = await mongoose.connect(MONGO_URI);
    } catch(err) {
        return err;
    }
    
    return db;
}

export default mongoConnect;