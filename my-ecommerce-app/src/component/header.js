
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center; // Center the navigation links
  align-items: center;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  margin: 0 15px; // Adjust margin to match the image
  color: #333;
  font-size: 1em; // Adjust font size to match the image
`;

const CompanyName = styled.div`
  font-size: 1.2em; // Adjust the company name size to match the image
  font-weight: bold;
  margin-right: 20px; // Ensure there's some spacing to the right edge
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="./images/Logo.jpg" alt="Website Logo" />
      <Nav>
        <NavItem to="/" exact>
          Home
        </NavItem>
        <NavItem to="/products">
          Products
        </NavItem>
        <NavItem to="/login">
          Login
        </NavItem>
      </Nav>
      <CompanyName>KAMFA</CompanyName>
    </HeaderContainer>
  );
};

export default Header;