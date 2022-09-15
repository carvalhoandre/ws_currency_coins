import { Container, Grid, Icons, Itens } from "./styles";

import { Typography } from "../../../../components";
import { GrAndroid, GrApple } from "react-icons/gr";

import { grey } from "../../../../styles/theme";

export const Promotion = (): JSX.Element => {
  return (
    <Container>
      <Typography
        color={grey.darkest}
        size="xl"
        textAlign="center"
        weight={600}
        margin="0.5em 0"
      >
        Acompanhe de perto
      </Typography>
      <Typography
        color={grey.default}
        size="md"
        textAlign="center"
        weight={300}
      >
        Trabalhamos para dispor a diversidade de plataformas para você!
      </Typography>

      <Grid>
        <Itens>
          <Icons>
            <GrAndroid size={30} />
            <GrApple size={30} />
          </Icons>

          <Typography>Baixe nossos App's</Typography>
        </Itens>
      </Grid>
    </Container>
  );
};
