import React from "react";

import useCoins from "../../store/Coins/useCoins";

import { LoadingSkeleton, NavBar } from "../../components";
import { NotFound, CoinColumn } from "./components";

const ListCoins = () => {
  const { fechCoins, loading, coins } = useCoins();

  React.useEffect(() => {
    fechCoins();
  }, []);

  return (
    <>
      <NavBar goRote="home" />

      {loading ? (
        <LoadingSkeleton count={10} />
      ) : coins.length > 0 ? (
        <CoinColumn coins={coins} />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default ListCoins;
