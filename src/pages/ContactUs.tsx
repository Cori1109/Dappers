import React from "react";
import styled from "styled-components";

const ContactUsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

const ContactUs: React.FunctionComponent = () => {
  return <ContactUsText>ContactUs</ContactUsText>;
};

export default ContactUs;
