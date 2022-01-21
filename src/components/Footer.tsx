import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as FaIcons from "react-icons/fa";

const FooterLink = styled(Link)`
  width: 100%;
  height: auto;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: #fffbfb;
  background-color: #0b477b;
`;

const FooterText = styled.label`
  margin-left: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  &:hover {
    cursor: pointer;
  }
`;

const Footer: React.FunctionComponent = () => {
  return (
    <FooterLink to="#">
      <FaIcons.FaCopyright />
      <FooterText>Copyright 2021 Dappers</FooterText>
    </FooterLink>
  );
};

export default Footer;
