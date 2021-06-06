import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <a href="#">
        <img src="images/logo.svg" alt="hanif" />
      </a>
      <MenuGroup>
        <div>Model S</div>
        <div>Model X</div>
        <div>Model Y</div>
      </MenuGroup>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
      </RightMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const MenuGroup = styled.div`
  display: flex;
  text-transform: uppercase;
  div {
    font-weight: 600;
    padding: 0 10px;
    cursor: pointer;
  }
`;

const RightMenu = styled.div``;
