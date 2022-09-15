import React from "react";

import { Typography } from "../Typography";
import { grey } from "../../styles/theme";

import * as Styles from "./styles";

export const Footer = (): JSX.Element => {
  return (
    <Styles.Footer>
      <Typography color={grey.darkest} weight={300}>© Todos os direitos reservados</Typography>
    </Styles.Footer>
  );
};
