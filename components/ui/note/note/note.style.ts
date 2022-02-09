import styled from "styled-components";

export const Container = styled.div<{ backColor; foreColor }>`
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.foreColor};
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
`;

export const Title = styled.h3<{ color }>`
  height: 15%;
  background-color: #ffffff70;
  border-bottom: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimeContainer = styled.div<{ color }>`
  border-bottom: 1px solid ${(props) => props.color};
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background-color: #ffffff40;
`;

export const Date = styled.input<{ color }>`
  height: 100%;
  color: ${(props) => props.color};
  border: 0;
  background: none;
  position: relative;
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    display: none;
  }
`;

export const Time = styled.label`
  width: 50px;
  text-align: center;
  background: none;
  border: none;
`;

export const TimeSeparator = styled.div<{ color }>`
  height: 60%;
  width: 1px;
  background-color: ${(props) => props.color};
`;

export const Btn = styled.button<{ delete; color }>`
  width: 100%;
  height: 10%;
  background-color: #ffffff40;
  border: none;
  color: ${(props) => props.color};
  border-top: 1px solid ${(props) => props.color};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: ${(props) => (props.delete ? "#ff7777ff" : "#ffffff80")};
  }
  &:active {
    background: none;
  }
`;

export const TextContainer = styled.textarea<{ color }>`
  width: 100%;
  height: 50%;
  background: none;
  border: none;
  resize: none;
  padding: 3%;
  margin-bottom: -2%;
  color: #fff;
  color: ${(props) => props.color};
  cursor: text;
`;