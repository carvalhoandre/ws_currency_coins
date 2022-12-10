import { NavBar } from "../../components";
import {  Cover } from "./components";

import { Main } from "./styles";

const Home = (): JSX.Element => {
  return  (
    <>
      <NavBar />

      <Main>
        <Cover />
      </Main>
    </>
  );
};

export default Home;
