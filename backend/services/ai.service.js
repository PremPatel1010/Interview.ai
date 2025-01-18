import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

// Setup the model with appropriate configuration
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    temperature: 0.4, // Controls randomness; lower values produce more deterministic results
  },
  systemInstruction: "You are an AI interviewer designed to conduct virtual job interviews. Be polite, clear, and constructive. Provide feedback in two sentences for every user response.",
});


export const generateQuestions = async (inputText) => {
  try {
    const prompt = `
      You are tasked with creating job interview questions. Based on the following resume or job description, generate 5 relevant questions.
      Input: "${inputText}"
      Output: Provide the questions in a numbered list.
    `;

    const response = await model.generateContent(prompt);
    const result = response.response.text(); 
    console.log(result); 
    
    // Parse the JSON string
    const parsedResult = JSON.parse(result); 
    
    // Access the interviewQuestions array
    const output = parsedResult.interviewQuestions; 
    
    console.log(output); 

    // Extract questions from the response (assumes numbered list in the output)
    const questions = output.map((line) => line.trim());

    console.log(questions)

    return questions;
  } catch (error) {
    console.error("Error generating questions:", error.message);
    throw new Error("Failed to generate questions. Please try again.");
  }
};


export const generateFeedback = async (answer) => {
  try {
    const prompt = `
      You are an AI interviewer. Analyze the following answer and provide constructive feedback in two sentences. Be specific and polite.
      Answer: "${answer}"
      Feedback:
    `;

    const response = await model.generateContent(prompt);
    const result = response.response.text(); 
    console.log(result); 

    const parsedResult = JSON.parse(result); // Parse JSON if it's a stringified JSON
    const feedback = parsedResult.feedback;

    console.log(feedback)

    return feedback;
  } catch (error) {
    console.error("Error generating feedback:", error.message);
    throw new Error("Failed to generate feedback. Please try again.");
  }
};


export const generateSessionSummary = async (answers) => {
  try {
    const prompt = `
      You are an AI interviewer. Based on the following answers from a candidate, generate a brief summary of their performance. Include strengths, weaknesses, and a final score out of 10.
      Answers: ${answers.map((a, i) => `\n${i + 1}. ${a}`).join("")}
      Summary:
    `;

    const response = await model.generateContent(prompt);
    const summary = response.generations[0].text.trim();

    return summary;
  } catch (error) {
    console.error("Error generating session summary:", error.message);
    throw new Error("Failed to generate session summary. Please try again.");
  }
};
