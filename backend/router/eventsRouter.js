import express from "express";
import { getAllEvents, createEvents } from "../controllers/eventsController.js";

const router = express.Router();

router.get('/getall', getAllEvents);
router.post('/create', createEvents); // Changed to '/create' for clarity

export default router;
