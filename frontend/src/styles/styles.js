// styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #333;
  font-family: 'Poppins', sans-serif;
  z-index: 1000;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin: 0 2rem;

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #6BD4E7;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #6BD4E7;
  }

  &:hover:after {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: auto;
  padding-left: 2rem;
  min-width: 320px;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    padding-left: 0;
    width: 100%;
    justify-content: center;
    min-width: auto;
  }
`;

export const LoginButton = styled.button`
  background: linear-gradient(135deg, #6BD4E7, #4A90E2);
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(107, 212, 231, 0.3);
  white-space: nowrap;
  min-width: 110px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(107, 212, 231, 0.4);
  }

  @media screen and (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    min-width: 100px;
  }
`;

export const GuestButton = styled.button`
  color: #6BD4E7;
  border: 2px solid #6BD4E7;
  padding: 0.8rem 1.8rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  background: transparent;
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 130px;

  &:hover {
    background: rgba(107, 212, 231, 0.1);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    min-width: 110px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, rgba(107, 212, 231, 0.95), rgba(74, 144, 226, 0.95)),
              url('/school-bg.jpg') center/cover no-repeat;
  min-height: 100vh;
  padding: 120px 20px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/pattern.png') repeat;
    opacity: 0.1;
  }

  @media screen and (max-width: 768px) {
    padding: 100px 15px 30px;
  }
`;

export const SchoolInfo = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const SchoolImage = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
  margin-top: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const LoremTextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 2rem;
  font-size: 1.2rem;
  color: white;
  text-align: justify;
  line-height: 1.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const AdminRegisterLink = styled(Link)`
  display: inline-block;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.8rem 1.8rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;

export const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 3rem 5% 1rem;
  margin-top: 4rem;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSection = styled.div`
  h3 {
    color: #6BD4E7;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #6BD4E7;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #6BD4E7;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);

  a {
    color: #6BD4E7;
    text-decoration: none;
    margin: 0 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AboutSection = styled.section`
  padding: 4rem 5%;
  background: #f8f9fa;
`;

export const NoticeBoard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const NoticeItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }

  h4 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

export const FeaturesSection = styled.section`
  padding: 4rem 5%;
  background: white;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    color: #666;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: "•";
      color: #6BD4E7;
    }
  }
`;

export const ContactSection = styled.section`
  padding: 4rem 5%;
  background: #f8f9fa;
`;

export const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #6BD4E7;
    }
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #6BD4E7, #4A90E2);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(107, 212, 231, 0.4);
  }
`;
