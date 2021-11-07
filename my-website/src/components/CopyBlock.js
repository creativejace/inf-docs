import React from "react";
import styled from "styled-components";
import { BodyMain, H2, MediumText } from "./styles/TextStyles";

export default function CopyBlock(props) {
  const { title, copy } = props;
  return (
    <Wrapper>
      <TextWrapper>
        <Title> {title || "INF"}</Title>
        <Text>{copy || "Lorem ipsum"}</Text>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TextWrapper = styled.div`
  padding: 2rem 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled(H2)``;
const Text = styled(BodyMain)`
  padding: 1% 15%;
`;
