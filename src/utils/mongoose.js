import mongoose from "mongoose";

const conn = {
    isConnected: false,
}
export async function dbConnect() {
    if (conn.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    conn.isConnected = db.connections[0].readyState;
    console.log(db.connection.db.databaseName);
    return db;
}

mongoose.connection.on("connected", () => {
    console.log('mongodb connected');
});

mongoose.connection.on("error", (err) => {
    console.log('mongoose error: '+err);
});