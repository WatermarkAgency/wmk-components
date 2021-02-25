import React from "react";
import styled from "styled-components";
import { WMKLink } from "wmk-lib";
import { colors } from "../../vars/palette";
import Theme from "../../vars/ThemeOptions";

const DrawerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 0;
  z-index: 999;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  transform: translateY(-100vh);
  background: none;
  transition: all 0.3s ease-out;
  & > * {
    visibility: hidden;
  }
  a {
    opacity: 0;
    position: relative;
    left: 20vw;
    :nth-of-type(1) {
      transition: left 0.4s ease-out, opacity 0.6s ease-in-out;
      transition-delay: 0.3s;
    }
    :nth-of-type(2) {
      transition: left 0.4s ease-out, opacity 0.6s ease-in-out;
      transition-delay: 0.35s;
    }
    :nth-of-type(3) {
      transition: left 0.4s ease-out, opacity 0.6s ease-in-out;
      transition-delay: 0.45s;
    }
    :nth-of-type(4) {
      transition: left 0.4s ease-out, opacity 0.6s ease-in-out;
      transition-delay: 0.35s;
    }
    :nth-of-type(5) {
      transition: left 0.4s ease-out, opacity 0.6s ease-in-out;
      transition-delay: 0.3s;
    }
  }
  &.open {
    background: ${colors.rgba("reverse", 0.9)};
    padding: 4%;
    transform: translateY(-1vh);
    transition: all 0.3s ease-out;
    & > * {
      visibility: visible;
    }
    a {
      opacity: 1;
      left: 0vw;
      font-size: 2.5rem;
      font-family: ${Theme.font.head};
      text-transform: uppercase;
      color: ${colors.hex("secondary")};
      :hover {
        //text-decoration: none;
        color: ${colors.hex("primary")};
      }
    }
  }
`;

const Drawer = ({ menus, isOpen, toggle, headerHeight }) => {
  const { slug, links } = menus;
  const classes = isOpen ? "open" : "";
  return (
    <DrawerWrap
      id={slug}
      className={classes}
      style={{ top: `${headerHeight}px` }}
      onClick={toggle}
    >
      {links.map((menu) => (
        <WMKLink key={menu.title} to={`/${menu.slug}`}>
          {menu.title}
        </WMKLink>
      ))}
    </DrawerWrap>
  );
};

export default Drawer;
