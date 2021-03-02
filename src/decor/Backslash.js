import React from "react";
import styled from "styled-components";
import { colors } from "../vars/palette";

const BackslashWrap = styled.span`
  color: ${colors.hover("secondary")};
  font-weight: 700;
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;
  transform: rotate(160deg) translateY(2px);
  display: inline-block;
  position: relative;
  bottom: 0.125rem;
`;

const Backslash = () => <BackslashWrap className="backslash">\</BackslashWrap>;

export default Backslash;
