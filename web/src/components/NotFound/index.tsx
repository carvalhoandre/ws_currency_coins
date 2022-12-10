import React from "react";

import { Container, Image } from "./styles";

import NotFoundImage from '../../assets/notFound.svg';
import { Typography } from "../Typography";

export const NotFound = (): JSX.Element => {
  return (
    <Container>
      <Typography size="bg" weight={500}>
        Moeda não encontrada
      </Typography>
     <Image src={NotFoundImage} alt="Imagem_Ilustrativa" />
    </Container>
  );
};
