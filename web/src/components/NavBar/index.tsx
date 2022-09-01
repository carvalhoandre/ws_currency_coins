import React from "react";

import { BiCoin, BiHome, BiX } from "react-icons/bi";

import { Typography } from "../Typography";
import { grey } from "../../styles/theme";

import * as Styles from "./styles";

export const NavBar = (): JSX.Element => {
  const [nav, setNav] = React.useState(true);

  return (
    <Styles.Header>
      <Styles.Nav isOpen={nav}>
        <Styles.NavHeader isOpen={nav}>
          <Typography color={grey.darkest} size="xl" weight={600}>
            coins.io
          </Typography>
        </Styles.NavHeader>

        <Styles.NavMenu isOpen={nav}>
          <Styles.List>
            <Styles.ItemList>
              <BiHome size={20} fontWeight={300} />
              <Typography color={grey.darkest} size="bg" weight={300}>
                Home
              </Typography>
            </Styles.ItemList>

            <Styles.ItemList>
              <BiCoin size={20} fontWeight={300} />
              <Typography color={grey.darkest} size="bg" weight={300}>
                Go Coins
              </Typography>
            </Styles.ItemList>
          </Styles.List>

          {!nav && <BiX onClick={() => setNav(false)} />}
        </Styles.NavMenu>
      </Styles.Nav>
    </Styles.Header>
  );
};
