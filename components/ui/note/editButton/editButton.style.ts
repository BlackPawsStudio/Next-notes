import styled from "styled-components";

export const Button = styled.button<{ editting }>`
  position: absolute;
  right: 2vw;
  top: calc(11vh / 2);
  width: 5vh;
  height: 5vh;
  transform: translateY(-50%);
  border: 1px solid #111;
  background-image: url(/icons/${(props) => props.editting ? "tick" : "edit"}.svg);
  background-position: center;
  background-size: ${(props) => (props.editting ? "70%" : "50%")};
  background-repeat: no-repeat;
  box-shadow: 2px 2px #111;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(105%) translateY(-50%);
    box-shadow: 3px 3px 5px #111;
  }
  &:active {
    transform: scale(95%) translateY(-50%);
    box-shadow: 1px 1px #111;
  }
`;