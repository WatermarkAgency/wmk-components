import React from "react";
import styled from "styled-components";
import { colors } from "../vars/palette";

const StripeWrap = styled.div`
  position: relative;
  z-index: 500;
  height: 9px;
  background-color: ${colors.hex("white")};
  background-image: linear-gradient(
    135deg,
    ${colors.rgba("secondary", 0.9)} 50%,
    transparent 50%,
    transparent
  );
  background-size: 3px 3px;
`;

const Stripe = () => <StripeWrap className="border-hash"></StripeWrap>;

export default Stripe;
