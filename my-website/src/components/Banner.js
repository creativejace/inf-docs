import React from "react";
import styled from "styled-components";
import heroImage from "../../static/img/BG_INF.png";

function Banner() {
  return (
    <ContentWrapper>
      <TextWrapper>
        <Title>Everest Foundation</Title>
        <Description>Welcome to your new Gatsby site.</Description>
      </TextWrapper>
    </ContentWrapper>
  );
}
export default Banner;

const ContentWrapper = styled.div`
  background-image: url(${heroImage});
`;

const TextWrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
  color: white;
`;
const Description = styled.div``;
