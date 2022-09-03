import styled from "styled-components";
import { primary } from "../../styles/theme";

interface Props {
  isOpen: boolean;
}

export const Header = styled.header`
  top: 0;
  left: 0;
  z-index: 100;
  background-color: transparent;
  /* box-shadow: -4px 4px 10px 1px rgb(0 0 0 / 8%); */
`;

export const Nav = styled.nav<Props>`
  padding: 0.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${(p) => (p.isOpen ? "3.4rem" : "0rem")};

  @media screen and (min-width: 768px) {
    height: 2rem;
    column-gap: 1em;
  }

`;

export const NavHeader = styled.div<Props>`
  display: flex;
  align-items: center;

  bottom: ${(p) => (p.isOpen ? "0rem" : "-1000rem")};
`;

export const NavMenu = styled.div<Props>`
 
`;

export const List = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  align-items: flex-end; 

  @media screen and (max-width: 350px) {
    column-gap: 0;
  }
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  &:hover {
    color: ${primary.default};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
