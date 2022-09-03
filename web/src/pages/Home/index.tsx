import React from "react";

import { Typography, NavBar } from "../../components";
import { Emphasis } from "./components/Emphasis";

import {
  ButtonHome,
  Container,
  ContainerData,
  ContainerImage,
  ContainerText,
  DownEmphasis,
  Image,
  RightEmphasis,
  Main,
} from "./styles";

import AllSpace from "../../assets/space.svg";

import { primary, grey } from "../../styles/theme";

const Home = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Main>
        <Container>
          <ContainerData>
            <ContainerText>
              <Typography
                color={primary.default}
                size="xxl"
                weight={900}
                textAlign="flex-start"
              >
                Descubra
              </Typography>
              <Typography
                color={grey.darkest}
                size="xxl"
                weight={900}
                textAlign="flex-start"
                line="2.5rem"
              >
                Milhares de criptomoedas
              </Typography>
              <Typography
                color={grey.dark}
                size="sm"
                weight={300}
                textAlign="flex-start"
              >
                Explore o grande mundo das criptomoedas em nosso marketplace
              </Typography>
            </ContainerText>

            <ButtonHome>
              <Typography
                color="#FFF"
                size="bg"
                weight={500}
                textAlign="center"
              >
                Explorar
              </Typography>
            </ButtonHome>
          </ContainerData>

          <ContainerImage>
            <Image src={AllSpace} alt="Imagem_Ilustrativa" />
          
            <RightEmphasis>
              <Emphasis emphasis="26K+" downText="Transações" />

              <Emphasis emphasis="18K" downText="Atualizações" />

              <Emphasis emphasis="8K" downText="Validações" />
            </RightEmphasis>
          </ContainerImage>
        </Container>
        <DownEmphasis>
          <Emphasis
            upText="Criptomoedas"
            emphasis="10K"
            downText="$871.046.86"
          />

          <Emphasis
            upText="Movientações"
            emphasis="2.00 ETH"
            downText="$8046.86"
          />
        </DownEmphasis>
      </Main>
    </>
  );
};

export default Home;
