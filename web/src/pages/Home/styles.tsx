import styled from "styled-components";
import { primary } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8em;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 768px) {
    gap: 4em;
  }
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5em;
  padding: 6em 0em 0em 3em;

  @media screen and (max-width: 767px) {
    padding: 3em 1rem;
    gap: 2.5em;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 18rem;
`;

export const ButtonHome = styled.button`
  margin-top: 2.5rem;
  background-color: ${primary.dark};
  padding: 0.8rem 1.3rem;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${primary.light};
    cursor: pointer;
  }
`;

export const DownEmphasis = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;

  @media screen and (max-width: 767px) {
    align-self: center;
  }
`;

export const RightEmphasis = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;

  @media screen and (max-width: 767px) {
    gap: 2rem;
  }
`;

export const ContainerData = styled.div``;

export const Image = styled.img`
  width: 350px;
  height: 350px;
  z-index: 100;

  @media screen and (max-width: 767px) {
    width: 200px;
    height: 200px;
  }
`;
