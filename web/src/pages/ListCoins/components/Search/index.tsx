import React from "react";

import { Container, Input } from "./styles";
import { GrFormSearch } from "react-icons/gr";
import { grey } from "../../../../styles/theme";

interface IProps {
  onChange: (event: string) => void;
}

export const Search = ({ onChange }: IProps): JSX.Element => {
  return (
    <Container>
      <GrFormSearch size={30} color={grey.light} />
      <Input
        name="search"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};
