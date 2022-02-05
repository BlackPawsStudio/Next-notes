import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  user-select: none;
  z-index: -1;
`;

export const Blur = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: blur(calc(0.3vw + 0.3vh));
`;

export const BackgroundText = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  margin-top: calc(5vw + 15vh);
  font-size: calc(5vw + 5vh);
  color: #999;
  overflow: hidden;
`;
