import styled from "styled-components";

export const TextContainer = styled.textarea.attrs(({ color }) => ({
  style: {
    color: color,
  },
}))`
  height: 95%;
  width: 98%;
  background: #ffffff33;
  border: none;
  resize: none;
  padding: calc(1vw + 1vh);
  margin: 10px auto calc(1vw + 1vh);
`;