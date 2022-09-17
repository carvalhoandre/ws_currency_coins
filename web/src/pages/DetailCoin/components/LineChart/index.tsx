import React from "react";

import { Coin } from "../../../../@types/store/Coins";

import Chart from "react-apexcharts";

type IProps = {
  coin: Coin;
};

const formatter = (val: string) => {
  return parseInt(val)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,") || 0
};

export const LineChart = ({ coin }: IProps): JSX.Element => {
  const state = {
    series: [
      {
        name: "$",
        data: [
          {
            x: "Valor",
            y: formatter(coin.supply),
          },
          {
            x: "Valor máximo",
            y: formatter(coin.maxSupply),
          },
          {
            x: "Valor de mercado USD",
            y: formatter(coin.marketCapUsd),
          },
          {
            x: "Valor Usd 24Hr",
            y: formatter(coin.volumeUsd24Hr),
          },
          {
            x: "Porcentagem 24H",
            y: formatter(coin.changePercent24Hr),
          },
        ],
      },
    ],
    options: {
      colors: ["#FFF", "transparent"],
      chart: {
        height: 350,
        type: "bar",
        zoom: {
          enabled: false,
        },
      },

      options: {
        chart: {
          type: "bar",
          height: 380,
        },
        xaxis: {
          type: "category",
          group: {
            style: {
              fontSize: "12px",
              fontWeight: 700,
            },
            groups: [
              { title: "2019", cols: 4 },
              { title: "2020", cols: 4 },
            ],
          },
        },
      },
    },
  };

  return (
    <Chart
      options={{ ...state }}
      series={state.series}
      height="240"
      type="bar"
    />
  );
};
