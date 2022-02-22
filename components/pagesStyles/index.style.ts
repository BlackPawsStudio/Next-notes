import styled from "styled-components";

export const TextContainer = styled.div`
  color: #111;
  height: 95%;
  width: 98%;
  background: #ffffff33;
  border: none;
  resize: none;
  padding: calc(1vw + 1vh);
  margin: 10px auto calc(1vw + 1vh);
  font-size: 2.5vh;
  overflow: auto;
  & > * {
    margin-bottom: 2vh;
  }
  & > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    text-align: center;
  }
  & > ul,
  ol {
    list-style-position: inside;
  }
  & > p > a {
    color: white;
  }
`;
