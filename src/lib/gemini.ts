import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY as string);
console.log(process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY!);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generatePrompt = async (
  jobDescription: string
): Promise<string> => {
  const PROMPT = `Generate a JSON array of quiz questions based on the following job description. While generating the questions, consider the following points along with job description questions should be technical questions also consider the year of experience or whether they are at senior or junior position according to the vary the difficulty of questions: ${jobDescription}. Each question should have the following structure: The questions should be multiple-choice format and cover various aspects of the job description, including responsibilities, skills, and knowledge required. Aim for a difficulty level of [easy/medium/hard]. Include at least [number] questions`;
  const result = await model.generateContent(PROMPT);
  const response = result.response.text();
  return response;
};
