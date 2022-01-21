import React from "react";
import styled from "styled-components";

const NFTmarketContainer = styled.div`
  height: 95.5vh;
  display: flex;
  background-color: #035c94;
  justify-content: center;
  align-items: center;
`;

const NFTImg = styled.div`
  background-image: url("NFT.jpeg");
  width: 80vw;
  height: 80vh;
  background-size: cover;
  border-radius: 4rem;
  display: flex;
  margin-top: 10vh;
  justify-content: center;
  align-items: center;
`;

const NFTText = styled.span`
  font-family: "Roboto";
  color: #66e517;
  font-size: 8rem;
  font-weight: bold;
  text-shadow: 5px 5px 6px #bfc3d7, 0 0 3em blue, 0 0 0.4em blue;
`;

const NFTmarket: React.FunctionComponent = () => {
  return (
    <NFTmarketContainer>
      <NFTImg>
        <NFTText>Coming Soon!</NFTText>
      </NFTImg>{" "}
    </NFTmarketContainer>
  );
};

export default NFTmarket;
