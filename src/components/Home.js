import React from "react";
import styled from "styled-components";
import Section from "./Section";

import landingPageInfo from "../landingPageInfo";

function Home() {
  return (
    <Container>
      {landingPageInfo.map((pageDetails) => (
        <Section {...pageDetails} />
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
