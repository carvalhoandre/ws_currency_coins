import React from "react";

import { Typography } from "../Typography";
import { grey } from "../../styles/theme";

import * as Styles from "./styles";

import { GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

interface IProps {
  goRote?: string;
}

export const NavBar = ({ goRote }: IProps): JSX.Element => {
  const navigate = useNavigate();

  const [nav] = React.useState(true);

  return (
    <Styles.Header>
      <Styles.Nav isOpen={nav}>
        <Styles.NavHeader isOpen={nav}>
          {goRote && (
            <Styles.NavIcon>
              <GrFormPrevious
                size={30}
                onClick={() => navigate(`/${goRote}`)}
              />
            </Styles.NavIcon>
          )}

          <Typography color={grey.darkest} size="xl" weight={600}>
            space.coins.io
          </Typography>
        </Styles.NavHeader>
      </Styles.Nav>
    </Styles.Header>
  );
};
