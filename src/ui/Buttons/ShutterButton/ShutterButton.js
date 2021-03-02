import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { WMKLink } from "wmk-lib";
import BlogMore from "../LoadMore/LoadMore";
import { colors } from "../../../vars/palette";
import Theme from "../../../vars/ThemeOptions";

const buttonTypes = {
  internal: WMKLink,
  external: WMKLink,
  more: BlogMore,
};

const AnimatedButton = ({ id, to, children, type, reverse, moreData }) => {
  const LinkElement = buttonTypes[type];
  const ButtonWrap = styled(LinkElement)`
    border: 2px solid ${colors.hex("secondary")};
    padding: 0.25rem 0rem;
    width: 100%;
    display: block;
    font-family: ${Theme.font.head};
    letter-spacing: 0.08rem;
    :hover {
      text-decoration: none;
    }
    &.reverse {
      border: 2px solid ${colors.hover("secondary", 0.3)};
    }
    &.animated-button:link,
    &.animated-button:visited {
      position: relative;
      color: ${colors.hover("secondary")};
      border-radius: 0;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      transition: all 1s ease;
      &:hover {
        color: ${colors.hex("white")};
      }
      &.reverse {
        color: ${colors.hex("reverse")};
      }
    }
    &.gibson-two {
      :after {
        opacity: 0;
        color: ${colors.hex("reverse")};
        transition: all 0.3s ease;
        background-image: -webkit-linear-gradient(
          transparent 50%,
          rgba(228, 140, 43, 0.4) 50%
        );
        background-size: 10px 10px;
        transform: translateX(-50%) translateY(-50%) rotate(-25deg);
        background-color: ${colors.hex("secondary")};
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        height: 0%;
        width: 150%;
        z-index: -1;
      }
      &.reverse:after {
        height: 600%;
        opacity: 1;
        transition: all 0.3s ease;
        background-image: none;
      }
      &.reverse:hover:after {
        transition: all 0.3s ease;
        background-image: -webkit-linear-gradient(
          transparent 50%,
          ${colors.rgba("secondary")} 50%
        );
        background-color: ${colors.hover("secondary", 0.15)};
      }
      :hover:after {
        height: 600% !important;
        opacity: 1;
        transition: all 0.3s ease;
        width: 150%;
      }
    }
  `;

  const classes = reverse
    ? "animated-button gibson-two reverse"
    : "animated-button gibson-two";
  const _to =
    type === "internal" ? (to.indexOf("/") === 0 ? to : "/" + to) : to;
  return type === "more" ? (
    <ButtonWrap
      id={id ? id : undefined}
      className={classes}
      moreData={moreData}
    >
      {children}
    </ButtonWrap>
  ) : (
    <ButtonWrap id={id ? id : undefined} className={classes} to={_to}>
      {children}
    </ButtonWrap>
  );
};

export default AnimatedButton;

AnimatedButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  to: PropTypes.string,
  reverse: PropTypes.bool,
};

AnimatedButton.defaultProps = {
  type: "internal",
  reverse: false,
};
