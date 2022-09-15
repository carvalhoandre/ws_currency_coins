import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from '../pages/Home'
import ListCoins from '../pages/ListCoins'

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/*" element={<Home />} />
        <Route path="/list-coins" element={<ListCoins />} />
      </Switch>
    </BrowserRouter>
  );
};
