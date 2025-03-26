import React, { useState, useEffect } from 'react';
import { studentService } from '../../services/api';
import styled from 'styled-components';
import { FaBook, FaCalendarAlt, FaChartBar, FaClock } from 'react-icons/fa';

const DashboardContainer = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  min-height: 100vh;
`;

const DashboardHeader = styled.div`
  margin-bottom: 2rem;
  h1 {
    color: #2c3e50;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #666;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  h3 {
    color: #2c3e50;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .value {
    font-size: 1.5rem;
    color: #6BD4E7;
    font-weight: bold;
  }
`;

const StudentDashboard = () => {
  const [stats, setStats] = useState({
    attendance: 0,
    grades: 0,
    upcomingExams: 0,
    pendingAssignments: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [attendance, grades] = await Promise.all([
          studentService.getAttendance(),
          studentService.getGrades()
        ]);

        setStats({
          attendance: attendance.data.percentage || 0,
          grades: grades.data.average || 0,
          upcomingExams: 2, // Example static data
          pendingAssignments: 3 // Example static data
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardContainer>
      <DashboardHeader>
        <h1>Student Dashboard</h1>
        <p>Welcome back! Here's your academic overview.</p>
      </DashboardHeader>

      <StatsGrid>
        <StatCard>
          <h3><FaClock /> Attendance</h3>
          <div className="value">{stats.attendance}%</div>
        </StatCard>
        <StatCard>
          <h3><FaChartBar /> Average Grade</h3>
          <div className="value">{stats.grades}</div>
        </StatCard>
        <StatCard>
          <h3><FaCalendarAlt /> Upcoming Exams</h3>
          <div className="value">{stats.upcomingExams}</div>
        </StatCard>
        <StatCard>
          <h3><FaBook /> Pending Assignments</h3>
          <div className="value">{stats.pendingAssignments}</div>
        </StatCard>
      </StatsGrid>
    </DashboardContainer>
  );
};

export default StudentDashboard; 