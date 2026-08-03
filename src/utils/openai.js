import { GoogleGenAI } from "@google/genai";


export const ai = new GoogleGenAI({
  apiKey: process.env.REACT_APP_GEMINI_API_KEY,
});

// async function listModels() {
//   const models = await ai.models.list();

//   for await (const model of models) {
//     console.log(model.name);
//   }
// }

// listModels();