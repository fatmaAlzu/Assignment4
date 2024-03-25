
import React from 'react';
import styled from 'styled-components';

const styles = {
  companyinfo: {
    display:"flex",
    width: "100%",
  },
  companylogo: {
    width: '50px',
  },
  companyname: {
    width: "90%",
    textAlign: "right",
  },
};

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const HeaderContainer = styled.div`
  display: Flex;
  justify-content: center;
`;

function Header() {
return (
  <div>
    <div style={styles.companyinfo}>
      <div style={styles.companylogo}>
        <img src="./images/Logo.jpg" alt="Company Logo" width="250"/>
      </div>

      <div style={styles.companyname}>
        <h1>KAMFA</h1>
      </div>
      <br/>
    </div>

    <HeaderContainer>
      <StyledNav>
        <a href = "/"> Home </a>
        <a href = "/products"> Products </a>
        <a href = "/login"> Login </a>
      </StyledNav>
    </HeaderContainer>
  </div>
);
}

export default Header;