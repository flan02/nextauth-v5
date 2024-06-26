
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("No mongo connection string. Set MONGODB_URI environment variable.");
}

const MONGODB_URI: string = process.env.MONGODB_URI;

let globalWithMongoose = global as typeof globalThis & {
  mongoose: any
}

let cached = globalWithMongoose.mongoose

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null }
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

