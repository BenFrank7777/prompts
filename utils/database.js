import mongoose from "mongoose";

let isConnected = false; //track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

     if (isConnected) {
         console.log("Connected to MongoDB...");
         return; //the return statement is important here because it stops the function from running
     }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompts',
        });

        isConnected = true;
        console.log("Connected to MongoDB...");
    } catch (error) {
        console.log(error)
    }
}



/*

import mongoose from 'mongoose';

let isConnected = false; // track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('Connected to MongoDB...');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}

*/