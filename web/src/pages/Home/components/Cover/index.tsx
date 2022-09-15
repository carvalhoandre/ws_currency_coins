import { useNavigate } from "react-router-dom";

import { Typography } from "../../../../components";

import {
  Body,
  ButtonHome,
  Container,
  ContainerData,
  ContainerImage,
  ContainerText,
  DownEmphasis,
  Image,
  Info,
  RightEmphasis,
} from "./styles";

import AllSpace from "../../../../assets/space.svg";

import { grey, primary } from "../../../../styles/theme";
import { Emphasis } from "../Emphasis";

export const Cover = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Body>
        <Info> 
        <Typography
              color="#FFF"
              size="bg"
              weight={900}
              textAlign="center"
            >
              Decolaremos 12/12/2022
            </Typography>
        </Info>
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

          <ButtonHome onClick={() => navigate(`/list-coins`)}>
            <Typography color="#FFF" size="bg" weight={500} textAlign="center">
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
        <Emphasis upText="Criptomoedas" emphasis="10K" downText="$871.046.86" />

        <Emphasis
          upText="Movientações"
          emphasis="2.00 ETH"
          downText="$8046.86"
        />
      </DownEmphasis>
    </Body>
  );
};
