import { Exam } from "../models/examSchema.js";

export const addExam = async (req, res) => {
  try {
    const { name, registrationNumber, className, marks } = req.body;

    if (!name || !registrationNumber || !className || !marks) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    const newExam = await Exam.create({ 
      name, 
      registrationNumber, 
      className, 
      marks: Number(marks) 
    });

    res.status(201).json({
      success: true,
      message: "Exam added successfully!",
      exam: newExam,
    });
  } catch (error) {
    console.error("Error adding exam:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error adding exam" 
    });
  }
};

export const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json({
      success: true,
      exams,
    });
  } catch (error) {
    console.error("Error fetching exams:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error fetching exams" 
    });
  }
};
