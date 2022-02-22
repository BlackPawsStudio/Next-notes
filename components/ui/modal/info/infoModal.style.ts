import styled from "styled-components";

export const Button = styled.button`
  width: 70px;
  height: 30px;
  border: 1px solid #111;
  background: none;
  box-shadow: 3px 3px #111;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #111;
    color: #fff;
  }
  &:active {
    box-shadow: 1px 1px #111;
  }
`;