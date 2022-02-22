import styled from "styled-components";

export const Text = styled.p`
  text-align: center;
  width: 100%;
  font-size: 2vh;
  font-weight: bold;
`;

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
