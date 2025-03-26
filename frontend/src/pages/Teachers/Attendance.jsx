import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  Divider,
  SubmitButton,
} from "../../styles/AttendanceStyles";

const CheckAttendanceSection = () => {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/students/getall`);
      console.log("Fetched Students:", response.data);

      const studentList = response.data.students || [];
      if (studentList.length === 0) console.warn("No students found!");

      setStudents(studentList);
      initializeAttendanceData(studentList);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const initializeAttendanceData = (students) => {
    const initialData = students.map((student) => ({
      id: student._id,
      name: student.name,
      status: "Present",
    }));
    setAttendanceData(initialData);
  };

  const handleStatusChange = (id, status) => {
    setAttendanceData((prevData) =>
      prevData.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const handleSubmit = async () => {
    try {
      const formattedData = attendanceData.map(({ id, status }) => ({
        student: id,
        status,
      }));
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/attendance`, { attendanceData: formattedData });
      console.log("Attendance data submitted:", response.data);
    } catch (error) {
      console.error("Error submitting attendance data:", error);
    }
  };

  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>

          {loading ? (
            <p>Loading students...</p>
          ) : students.length === 0 ? (
            <p>No students available</p>
          ) : (
            <AttendanceList>
              {students.map((student, index) => {
                const studentData = attendanceData.find((s) => s.id === student._id);

                return (
                  <React.Fragment key={student._id}>
                    <AttendanceItem>
                      <StudentName>{student.name}</StudentName>
                      <CheckboxLabel>
                        <input
                          type="radio"
                          name={`attendance-${student._id}`}
                          checked={studentData?.status === "Present"}
                          onChange={() => handleStatusChange(student._id, "Present")}
                        />
                        Present
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input
                          type="radio"
                          name={`attendance-${student._id}`}
                          checked={studentData?.status === "Absent"}
                          onChange={() => handleStatusChange(student._id, "Absent")}
                        />
                        Absent
                      </CheckboxLabel>
                      <CheckboxLabel>
                        <input
                          type="radio"
                          name={`attendance-${student._id}`}
                          checked={studentData?.status === "Absent with apology"}
                          onChange={() => handleStatusChange(student._id, "Absent with apology")}
                        />
                        Absent with apology
                      </CheckboxLabel>
                    </AttendanceItem>
                    {index !== students.length - 1 && <Divider />}
                  </React.Fragment>
                );
              })}
            </AttendanceList>
          )}

          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );
};

export default CheckAttendanceSection;
