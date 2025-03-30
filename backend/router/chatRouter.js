import express from "express";
import { chatAssistant } from "../controllers/chatController.js";

const router = express.Router();

router.post('/ask', chatAssistant);


export default router;
