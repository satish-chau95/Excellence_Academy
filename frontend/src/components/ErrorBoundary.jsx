import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBug, FaHome, FaRedo } from 'react-icons/fa';

const ErrorContainer = styled.div`
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

const Icon = styled.div`
  font-size: 4rem;
  color: #dc3545;
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

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ContentWrapper>
            <Icon>
              <FaBug />
            </Icon>
            <Title>Oops! Something went wrong</Title>
            <Message>
              We're sorry, but something unexpected happened. Please try again or return to the home page.
            </Message>
            <ButtonGroup>
              <StyledButton as={Link} to="/" className="primary">
                <FaHome /> Back to Home
              </StyledButton>
              <StyledButton onClick={this.handleReload} className="secondary">
                <FaRedo /> Try Again
              </StyledButton>
            </ButtonGroup>
          </ContentWrapper>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 