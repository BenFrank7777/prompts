//how to create a route
//export const POST = async (req, res) => {and you wrtite everything in here} 
//then you need to connect to a db
// connect to db is a Lambda function.....this means everytime it gets called it goes to sleep
import  Prompt from "@models/prompt"; //MAKE SURE YOU DONT USE CURLY BRACKETS WHEN CALLING "PROMPT"
 import { connectToDB } from "@utils/database";


 export const POST = async (request) => {
     const { userId, prompt, tag } = await request.json();
    
     try {
         await connectToDB();
         const newPrompt = new Prompt({ 
            creator: userId, prompt, tag });

         await newPrompt.save();

         return new Response(JSON.stringify(newPrompt), { status: 201 }) /* status 201 means 'created' */
     } catch (error) {
         return new Response('Failed to create a new prompt', { status: 500 }) /* status 500 means 'server error' */
     }
 } 


 /*
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}

*/