import { handleValidationError } from "../middlewares/errorHandler.js";
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

export const chatAssistant = async (req, res) => {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const { message } = req.body;

    if (!message) {
        handleValidationError("Message is required", 400);
    }

    try {
        const response = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: message },
            ],
            temperature: 0.5,
            max_completion_tokens: 1024,
            top_p: 1,
            stream: false,
        });

        res.json({ reply: response.choices[0]?.message?.content || "No response." });
    } catch (error) {
        console.error("Error in Groq API:", error);
        res.status(500).json({ error: "Failed to fetch response from Groq" });
    }
};
