import React from "react";

import useCoins from "../../store/Coins/useCoins";

import { Column, Container } from "./styles";

import { NavBar, Typography, NotFound } from "../../components";
import { Coin } from "../../@types/store/Coins";
import { LineChart } from "./components/LineChart";

const DetailCoin = (): JSX.Element => {
  const { coins } = useCoins();

  const [coin, setCoin] = React.useState<Coin>();

  React.useEffect(() => {
    const id = window.location.pathname.split("&")[1];

    const coinSelected: Coin | undefined = coins.find((coin) =>
      coin.rank.includes(id)
    );

    coinSelected && setCoin(coinSelected);
  }, []);

  return (
    <>
      <NavBar goRote="list-coins" />

      <Container>
        {coin ? (
          <>
            <Typography weight={600} size="xl">
              {coin?.name}
            </Typography>

            <Column>
              <LineChart coin={coin} />
            </Column>
          </>
        ) : (
          <NotFound />
        )}
      </Container>
    </>
  );
};

export default DetailCoin;
