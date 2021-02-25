import React from "react";
import Toggle from "./HamburgerButton";
import styled from "styled-components";

const MenuText = styled.span`
  font-size: ${({ isStuck }) => (isStuck ? "0px" : "14px")};
  position: relative;
  left: ${({ isOpen }) => (isOpen ? "22px" : "12px")};
  transition: opacity 0.3s ease, left 0.1s ease;
  display: ${({ isStuck }) => (isStuck ? "none" : "block")};
`;

const Hamburger = ({ isOpen, toggle, height, isStuck }) => {
  return (
    <React.Fragment>
      <Toggle
        isOpen={isOpen}
        toggle={toggle}
        height={height}
        isStuck={isStuck}
      />
      <MenuText isOpen={isOpen} isStuck={isStuck}>
        {isOpen ? "CLOSE" : "MENU"}
      </MenuText>
    </React.Fragment>
  );
};

export default Hamburger;
