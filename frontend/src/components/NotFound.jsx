import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 3rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ErrorCode = styled.div`
  font-size: 6rem;
  font-weight: bold;
  color: #6BD4E7;
  margin-bottom: 1rem;
  line-height: 1;
`;

const Icon = styled.div`
  font-size: 4rem;
  color: #6BD4E7;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &.primary {
    background: linear-gradient(135deg, #6BD4E7, #4A90E2);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(107, 212, 231, 0.4);
    }
  }
  
  &.secondary {
    background: white;
    color: #4A90E2;
    border: 2px solid #4A90E2;
    
    &:hover {
      background: #f8f9fa;
    }
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <ContentWrapper>
        <ErrorCode>404</ErrorCode>
        <Icon>
          <FaSearch />
        </Icon>
        <Title>Page Not Found</Title>
        <Message>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </Message>
        <ButtonGroup>
          <StyledButton to="/" className="primary">
            <FaHome /> Back to Home
          </StyledButton>
          <StyledButton to="#" onClick={() => window.history.back()} className="secondary">
            <FaArrowLeft /> Go Back
          </StyledButton>
        </ButtonGroup>
      </ContentWrapper>
    </NotFoundContainer>
  );
};

export default NotFound; 