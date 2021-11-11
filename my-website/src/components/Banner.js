import React from "react";
import styled from "styled-components";
import heroImage from "../../static/img/eye.jpg";
import { H1, H3 } from "./styles/TextStyles";

function Banner() {
  return (
    <ContentWrapper>
      <TextWrapper>
        <Title>Everest Foundation</Title>
        <Description>
          INF provides open access to a global identity creation and
          verification network, and associated digital wallet for humanity.
        </Description>
      </TextWrapper>
    </ContentWrapper>
  );
}
export default Banner;

const ContentWrapper = styled.div`
  background-image: url(${heroImage});

  position: relative;
  overflow: hidden;
  height: 400px;
`;

const TextWrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled(H1)`
  color: white;
`;
const Description = styled(H3)`
  color: white;
`;
