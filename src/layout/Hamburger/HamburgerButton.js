import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../vars/palette";

const BurgerWrap = styled.button`
  position: relative;
  padding: 0 1rem;
  left: 1.5rem;
  height: 40px;
  width: 40px;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.25s ease;
  background: none;
  border: none;
`;

const TopBar = styled.span`
  ${({ lineBaseStyle, isStuck }) => lineBaseStyle(isStuck)}
  ${({ isOpen, isStuck }) =>
    isOpen && isStuck
      ? `transform: rotate(45deg); left: 0;`
      : isOpen
      ? `transform: rotate(45deg); left: 0;`
      : isStuck
      ? `left: 0; top: 5px;`
      : `transform: rotate(130deg); left: -16px;`}
`;
const MidBar = styled.span`
  ${({ lineBaseStyle, isStuck }) => lineBaseStyle(isStuck)}
  ${({ isOpen, isStuck }) =>
    isOpen && isStuck
      ? `transform: rotate(180deg); left: 0; opacity: 0;`
      : isOpen
      ? `transform: rotate(180deg); left: 0; opacity: 0;`
      : isStuck
      ? ``
      : `transform: rotate(130deg); left: 0;`}
`;
const BtmBar = styled.span`
  ${({ lineBaseStyle, isStuck }) => lineBaseStyle(isStuck)}
  ${({ isOpen, isStuck }) =>
    isOpen && isStuck
      ? `transform: rotate(-45deg); left: 0;`
      : isOpen
      ? `transform: rotate(-45deg); left: 0;`
      : isStuck
      ? `left: 0; top: 20px;`
      : `transform: rotate(130deg); left: 16px;`}
`;

const BurgerButton = ({
  isStuck,
  isOpen,
  toggle,
  height,
  colorPalatte,
  tracking,
}) => {
  const [data, setData] = useState();
  useEffect(() => {
    const dL = (window && window.dataLayer) || [];
    if (tracking && window && window.dataLayer) {
      setData(dL);
    }
  }, [tracking]);
  const lineBaseStyle = (isStuck) => `
  background: ${colorPalatte.hex("primary")};
  border: none;
  height: 1px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.35s ease;
  cursor: pointer;
  ${
    isStuck
      ? `width: 70%;
  top: 0.75rem;`
      : ``
  }
`;
  return (
    <BurgerWrap
      onClick={()=>{
        toggle()
        const { event, params } = tracking;
        return tracking && data ? data.push({ event, ...params }) : undefined;
      }}
      style={{ top: `${height / 2 / 2}px` }}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
    >
      <TopBar isOpen={isOpen} isStuck={isStuck} lineBaseStyle={lineBaseStyle} />
      <MidBar isOpen={isOpen} isStuck={isStuck} lineBaseStyle={lineBaseStyle} />
      <BtmBar isOpen={isOpen} isStuck={isStuck} lineBaseStyle={lineBaseStyle} />
    </BurgerWrap>
  );
};

export default BurgerButton;

BurgerButton.propTypes = {
  isStuck: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  height: PropTypes.number,
  colorPalatte: PropTypes.object,
};

BurgerButton.defaultProps = {
  colorPalatte: colors,
};
