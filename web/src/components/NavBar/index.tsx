import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography } from "../Typography";

import Image from "../../assets/logoBlack.svg";

import * as Styles from "./styles";

interface IProps {
  goRote?: string;
}

export const NavBar = ({ goRote }: IProps): JSX.Element => {
  const navigate = useNavigate();

  const [nav] = React.useState(true);

  return (
    <Styles.Header isOpen={goRote ? true : false}>
      <Styles.Nav isOpen={nav}>
        <Styles.NavHeader isOpen={nav}>
          {goRote ? (
            <i
              className="uil uil-angle-left nav_icon"
              onClick={() => navigate(`/${goRote}`)}
            />
          ) : (
            <Styles.Logo src={Image} />
          )}

          <Typography size="xl" weight={600} textAlign="center">
            AC Coins
          </Typography>
        </Styles.NavHeader>
      </Styles.Nav>
    </Styles.Header>
  );
};
