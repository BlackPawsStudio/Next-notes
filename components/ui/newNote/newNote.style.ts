import styled from "styled-components";

export const Container = styled.div`
  border: 10px solid #aaa;
  background-color: #77777733;
  position: relative;
  width: 200px;
  height: 300px;
  transition: all 0.3s;
  box-shadow: 5px 5px #111;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    transform: scale(105%);
    box-shadow: 10px 10px 5px #111;
  }
  &:active {
    transform: scale(95%);
    box-shadow: 1px 1px 5px #111;
  }
`;

export const PlusLine = styled.div<{ horizontal? }>`
  width: 10px;
  height: 50px;
  position: absolute;
  background: #ccc;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) ${props => props.horizontal ? "rotate(90deg)" : ''};
`;
