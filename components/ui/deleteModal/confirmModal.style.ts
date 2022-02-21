import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000bd;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const Modal = styled.div`
  width: 300px;
  height: 30vh;
  background-color: #ffffff;
  box-shadow: 10px 10px #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 8vh 0;
`;

export const Text = styled.p`
  text-align: center;
  width: 100%;
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
`

export const Button = styled.button<{ yes? }>`
  width: 70px;
  height: 30px;
  border: 1px solid #111;
  background: none;
  box-shadow: 3px 3px #111;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.yes ? "green" : "#cc0000")};
    border: 1px solid ${(props) => (props.yes ? "green" : "#cc0000")};
    color: #fff;
  }
  &:active {
    box-shadow: 1px 1px #111;
  }
`;