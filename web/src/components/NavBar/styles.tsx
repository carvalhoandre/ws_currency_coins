import styled from "styled-components";
import { primary } from "../../styles/theme";

interface Props {
  isOpen: boolean;
}

export const Header = styled.header`
  min-width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: transparent;
  /* box-shadow: -4px 4px 10px 1px rgb(0 0 0 / 8%); */
`;

export const Nav = styled.nav<Props>`
  padding: 0rem 2rem;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${(p) => (p.isOpen ? "3.4rem" : "0rem")};
`;

export const NavHeader = styled.div<Props>`
  display: flex;
  align-items: center;

  bottom: ${(p) => (p.isOpen ? "0rem" : "-1000rem")};
`;

export const NavMenu = styled.div<Props>`
  @media screen and (max-width: 767px) {
    position: fixed;
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2em 1.5em 4em;
    /* box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15); */
    border-radius: 1.5em 1.5em 0 0;
    transition: 0.3s;
  }
`;

export const List = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  align-items: flex-end; 
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  &:hover {
    color: ${primary.default};
  }
`;
