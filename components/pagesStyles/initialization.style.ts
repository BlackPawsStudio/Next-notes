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
`;

export const Modal = styled.form`
  width: 300px;
  height: 300px;
  background-color: #fff;
  box-shadow: 10px 10px #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;

export const Title = styled.h3`
  font-size: 24px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const Input = styled.input`
  width: 170px;
  height: 30px;
  border: 1px solid #111;
  background: none;
  box-shadow: 3px 3px #111;
  transition: all 0.3s;
  padding-left: 5px;
  &:hover {
  }
  &:active {
    box-shadow: 1px 1px #111;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Additional = styled.div`
  display: flex;
  width: 80%;
  margin-top: 20px;
  font-size: 12px;
`;

export const Button = styled.button`
  width: 70px;
  height: 30px;
  border: 1px solid #111;
  background: none;
  box-shadow: 3px 3px #111;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #444;
    color: #fff;
  }
  &:active {
    box-shadow: 1px 1px #111;
  }
`;
