import React from "react";
import styled from "styled-components";
import Section from "./Section";

import landingPageInfo from "../landingPageInfo";

function Home() {
  return (
    <Container>
      {landingPageInfo.map(
        ({
          id: key,
          title,
          description,
          backgroundImg,
          leftBtnText,
          rightBtnText,
        }) => (
          <Section
            key={key}
            title={title}
            description={description}
            backgroundImg={backgroundImg}
            leftBtnText={leftBtnText}
            rightBtnText={rightBtnText}
          />
        )
      )}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
