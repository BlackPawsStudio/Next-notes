import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10vh;
  margin: 0 10%;
  padding-top: 7vh;
  `;

export const NoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 5vh;
  column-gap: 5vh;
  padding-bottom: 7%;
  transition: all .5s;
`;

export const Title = styled.p`
  font-size: calc(4vh + 2vw);
  font-weight: bold;
  text-align: center;
  user-select: none;
  padding: 0 10%;
`;
