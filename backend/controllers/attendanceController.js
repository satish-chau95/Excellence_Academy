import Attendance from "../models/attendanceSchema.js";

export const markAttendance = async (req, res, next) => {
  try {
    const { attendanceData } = req.body;
    if (!attendanceData || !Array.isArray(attendanceData) || attendanceData.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid attendance data!" });
    }

    const attendanceRecords = await Promise.all(
      attendanceData.map(async ({ student, status }) => {
        return await Attendance.create({ student, status });
      })
    );

    res.status(200).json({
      success: true,
      message: "Attendance marked successfully!",
      attendanceRecords
    });
  } catch (err) {
    next(err);
  }
};

export const getAllAttendance = async (req, res, next) => {
  try {
    const attendanceRecords = await Attendance.find().populate('student', 'name registrationNumber grade');
    res.status(200).json({
      success: true,
      attendanceRecords
    });
  } catch (err) {
    next(err);
  }
};
