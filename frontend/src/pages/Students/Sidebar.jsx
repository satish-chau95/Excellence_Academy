import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsGraphUp, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots } from 'react-icons/bs';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  height: 100%;
  background-color: #2c3e50;
  color: white;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.3s ease;
  z-index: 100;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  transition: opacity 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #34495e;
  transition: background-color 0.3s ease, padding 0.3s ease;
  &:hover {
    background-color: #34495e;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
  transition: opacity 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  transition: opacity 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: -15px;
  width: 30px;
  height: 30px;
  background-color: #34495e;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const ToggleIcon = styled.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader isOpen={isOpen}>
          <LogoContainer isOpen={isOpen}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L1 7l11 5 9-4V17h2V7l-11-5zM12 13L3 8v9h2v-6l7 4 7-4v6h2V8l-9 5z"
                fill="currentColor"
              />
            </svg>
          </LogoContainer>
        </SidebarHeader>
        <SidebarHeader isOpen={isOpen}>Student</SidebarHeader>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon><BsGraphUp /></SidebarIcon>
            <StyledLink to="/student/dashboard" isOpen={isOpen}>Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsFileText /></SidebarIcon>
            <StyledLink to="/student/assignments" isOpen={isOpen}>Assignments</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsBook /></SidebarIcon>
            <StyledLink to="/student/exams" isOpen={isOpen}>Exams</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsGraphDown /></SidebarIcon>
            <StyledLink to="/student/performance" isOpen={isOpen}>Performance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsCalendar /></SidebarIcon>
            <StyledLink to="/student/attendance" isOpen={isOpen}>Attendance</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsBook /></SidebarIcon>
            <StyledLink to="/student/library" isOpen={isOpen}>Library</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsChatDots /></SidebarIcon>
            <StyledLink to="/student/communication" isOpen={isOpen}>Announcement</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsGear /></SidebarIcon>
            <StyledLink to="/student/settings" isOpen={isOpen}>Profile</StyledLink>
          </SidebarNavItem>
        </SidebarNav>
        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
        </ToggleButton>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
