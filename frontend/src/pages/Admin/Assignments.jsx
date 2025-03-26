import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
} from "../../styles/AssignmentsStyles";

const Assignments = () => {
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    grade: "",
    deadline: "",
  });
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/assignments/getall"
      );
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      toast.error("Failed to load assignments");
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (
      !newAssignment.title.trim() ||
      !newAssignment.description.trim() ||
      !newAssignment.grade.trim() ||
      !newAssignment.deadline.trim()
    ) {
      toast.warn("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/assignments",
        newAssignment
      );

      toast.success("Assignment added successfully!");
      setAssignments([...assignments, response.data.assignment]);
      setNewAssignment({ title: "", description: "", grade: "", deadline: "" });
    } catch (error) {
      console.error("Error adding assignment:", error);
      toast.error(error.response?.data?.message || "Error adding assignment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AssignmentsContainer>
      <ToastContainer />
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <label htmlFor="title">Title:</label>
            <AddAssignmentInput
              id="title"
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, title: e.target.value })
              }
            />

            <label htmlFor="description">Description:</label>
            <AddAssignmentTextArea
              id="description"
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) =>
                setNewAssignment({
                  ...newAssignment,
                  description: e.target.value,
                })
              }
            />

            <label htmlFor="grade">Grade:</label>
            <AddAssignmentInput
              id="grade"
              type="number"
              placeholder="Enter assignment grade"
              value={newAssignment.grade}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, grade: e.target.value })
              }
            />

            <label htmlFor="deadline">Deadline:</label>
            <AddAssignmentInput
              id="deadline"
              type="date"
              value={newAssignment.deadline}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, deadline: e.target.value })
              }
            />

            <AddAssignmentButton type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Assignment"}
            </AddAssignmentButton>
          </AddAssignmentForm>

          <AssignmentList>
            {assignments.map((assignment) => (
              <AssignmentItem key={assignment._id}>
                <strong>{assignment.title}: </strong>
                {assignment.description}, Grade: {assignment.grade}, Due:{" "}
                {assignment.deadline}
              </AssignmentItem>
            ))}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default Assignments;
