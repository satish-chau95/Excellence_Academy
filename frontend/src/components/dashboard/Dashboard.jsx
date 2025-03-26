import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  svg {
    font-size: 2rem;
    color: #6BD4E7;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      // Redirect based on user role
      switch (user.role) {
        case 'student':
          navigate('/student/dashboard');
          break;
        case 'teacher':
          navigate('/teacher/dashboard');
          break;
        case 'admin':
          navigate('/admin/dashboard');
          break;
        default:
          navigate('/unauthorized');
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <LoadingContainer>
        <FaSpinner />
      </LoadingContainer>
    );
  }

  return <DashboardContainer />;
};

export default Dashboard; 