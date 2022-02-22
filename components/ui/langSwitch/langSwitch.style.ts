import styled from "styled-components";

export const Switch = styled.div`
  position: relative;
  width: 7vw;
  min-width: 50px;
  height: 7vh;
  background-color: #ffffff;
`;

export const SwitchThumb = styled.div<{ checked }>`
  position: absolute;
  cursor: pointer;
  transition: all 0.3s;
  width: 6vh;
  height: 6vh;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  margin-left: ${(props) => (props.checked ? "calc(90% - 6vh)" : "")};
  background-color: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
`;
