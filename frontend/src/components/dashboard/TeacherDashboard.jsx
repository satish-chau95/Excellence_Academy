import React, { useState, useEffect } from 'react';
import { teacherService } from '../../services/api';
import styled from 'styled-components';
import { FaUsers, FaBookOpen, FaClipboardList, FaChartLine } from 'react-icons/fa';

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

const TeacherDashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalClasses: 0,
    pendingAssignments: 0,
    averagePerformance: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const classes = await teacherService.getClasses();
        
        setStats({
          totalStudents: 150, // Example static data
          totalClasses: classes.data.length || 0,
          pendingAssignments: 5, // Example static data
          averagePerformance: 85 // Example static data
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
        <h1>Teacher Dashboard</h1>
        <p>Welcome back! Here's your teaching overview.</p>
      </DashboardHeader>

      <StatsGrid>
        <StatCard>
          <h3><FaUsers /> Total Students</h3>
          <div className="value">{stats.totalStudents}</div>
        </StatCard>
        <StatCard>
          <h3><FaBookOpen /> Active Classes</h3>
          <div className="value">{stats.totalClasses}</div>
        </StatCard>
        <StatCard>
          <h3><FaClipboardList /> Pending Reviews</h3>
          <div className="value">{stats.pendingAssignments}</div>
        </StatCard>
        <StatCard>
          <h3><FaChartLine /> Class Average</h3>
          <div className="value">{stats.averagePerformance}%</div>
        </StatCard>
      </StatsGrid>
    </DashboardContainer>
  );
};

export default TeacherDashboard; 