import React from "react";

import { Card, Column, Container, Row, TitleContainer } from "./styles";
import { Search } from "../Search";

import { grey, alerts } from "../../../../styles/theme";

import { Coin } from "../../../../@types/store/Coins";
import { Typography } from "../../../../components";

interface IProps {
  coins: Coin[];
}

export const CoinColumn = ({ coins }: IProps) => {
  const [search, setSearch] = React.useState("");

  console.log(search);
  const filteredCoins =
    search.length > 0
      ? coins.filter(
          (coin) =>
            coin.name.toUpperCase().includes(search.toUpperCase()) ||
            coin.symbol.toUpperCase().includes(search.toUpperCase())
        )
      : [];

  let useCoins = filteredCoins.length > 0 ? filteredCoins : coins;

  return (
    <Container>
      <TitleContainer>
        <Typography color={grey.darkest} weight={600} size="xl">
          Criptomoedas
        </Typography>
        <Typography color={grey.light} weight={300} size="md">
          Acompanhe o mercado
        </Typography>
      </TitleContainer>

      <Search onChange={setSearch} />

      <Column>
        {useCoins.map((coin: Coin) => {
          let price: string = parseInt(coin.priceUsd)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,");

          return (
            <Card key={coin.id}>
              <Row>
                <Typography color={grey.darkest} weight={600} size="bg">
                  {coin.name}
                </Typography>

                <Typography color={grey.darkest} weight={800} size="bg">
                  #{coin.rank}
                </Typography>
              </Row>

              <Row>
                <Typography color={grey.default} weight={300} size="md">
                  {coin.symbol}
                </Typography>
                <Typography
                  color={
                    parseInt(price) > 0
                      ? alerts.success.default
                      : alerts.error.default
                  }
                  weight={500}
                  size="md"
                >
                  $ {price}
                </Typography>
              </Row>
            </Card>
          );
        })}
      </Column>
    </Container>
  );
};
