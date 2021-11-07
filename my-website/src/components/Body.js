import React from "react";
import styled from "styled-components";
import { BodyIntro, BodyMain } from "./styles/TextStyles";

function Body() {
  const divStyle = {
    margin: "50px 70px",
  };
  return (
    <ContentWrapper>
      <TextWrapper>
        <div className="text--center padding-horiz--md" style={divStyle}>
          <Intro>
            The INF provides a full stack platform to bring about a digital,
            user-centric, transparent society: identity, account, ledger,
            currency. It provides a free, digital, biometric identity, and an
            account to store digital money and documents. Coupled with a
            cost-effective, fast ledger, and access to regulated financial
            services, the INF supplies a public utility to usher in a digital
            future for all of Humanity. Every human being will be given 0.001 ID
            token for free, endowing them with access to the network, thus
            claiming their sovereign right to an identity, wallet and
            credentials they control. Organizations (i.e. coffee shops, banks,
            governments, groups of friends, etc), comprised of multiple humans,
            can purchase accounts, enabling society to organize itself and
            society around them to run any application from “are you who you say
            you are?” to payments, to supply chain, to insurance, to voting, to
            monetizing one’s own data.{" "}
          </Intro>
        </div>
      </TextWrapper>
    </ContentWrapper>
  );
}
export default Body;

const ContentWrapper = styled.div``;

const TextWrapper = styled.div`
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Intro = styled(BodyMain)``;
