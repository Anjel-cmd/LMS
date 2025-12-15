// import mongoose from "mongoose";

// // Connect to the MongoDB database

// const connectDB = async ()=>{
//     mongoose.connection.on('connected', ()=> console.log('Database Connected'))

//     await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
// }
// export default connectDB

import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  mongoose.connection.on("connected", () =>
    console.log("MongoDB connected")
  );

  await mongoose.connect(process.env.MONGODB_URI + "/lms");
  isConnected = true;
};

export default connectDB;
