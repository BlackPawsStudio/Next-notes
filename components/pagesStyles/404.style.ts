import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`

export const ErrorMessage = styled.h2`
  font-size: 60px;
`

export const ErrorDescription = styled.p`
  font-size: 20px;
  font-style: italic;
`

export const ErrorButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #111;
  font-weight: bold;
  font-size: 16px;
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
`