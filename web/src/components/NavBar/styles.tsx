import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Header = styled.header<Props>`
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  padding: 1em;
  position: ${({ isOpen }) => (isOpen ? "fixed" : "relative")};
  box-shadow: ${({ isOpen }) =>
    isOpen ? "1px -5px 20px 0px rgb(48 50 50 / 10%)" : "none"};
  width: 100%;
  z-index: 1000;

  @media screen and (max-width: 800px) {
    padding: 0.8em 0em;
  }
`;

export const Nav = styled.nav<Props>`
  padding: 0.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${(p) => (p.isOpen ? "3.4rem" : "0rem")};

  @media screen and (min-width: 800px) {
    height: 2rem;
    column-gap: 1em;
    padding: 0.8em 0em;
  }

  @media screen and (max-width: 720px) {
    padding: 0em 0.5em;
  }
`;

export const NavHeader = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 1em;

  bottom: ${(p) => (p.isOpen ? "0rem" : "-1000rem")};

  &:first-child {
    font-size: 2.5em;
    gap: 0.5em;
  }

  &:first-child:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  max-width: 70px;
  max-height: 70px;

  & > *:hover {
    cursor: pointer;
  }
`;
