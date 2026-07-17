import mongoose from "mongoose";
// import dns from "dns";

// dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
const MONGODB_URI = process.env.MONGODB_URI!;

export default async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose;
  }


  return mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  });
}