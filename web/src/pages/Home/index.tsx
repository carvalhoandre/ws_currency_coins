import React from "react";

import { Typography, NavBar } from "../../components";
import { Container } from "./styles";

const Home = (): JSX.Element => {
  return (
    <Container>
      <NavBar />
      <Typography size="bg" textAlign="center">
        Hello Word
      </Typography>
    </Container>
  );
};

export default Home;
