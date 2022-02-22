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

export const Buttons = styled.div`
  height: 20%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const Btn = styled.button<{ delete?; color }>`
  width: 100%;
  height: 50%;
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

export const TextContainer = styled.div<{ color }>`
  width: 100%;
  height: 50%;
  background: none;
  border: none;
  resize: none;
  padding: 3%;
  margin-bottom: -2%;
  color: ${(props) => props.color};
  overflow-y: auto;
  overflow-x: hidden;
  cursor: text;
  & > * {
    margin-bottom: 10px;
  }
  & > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    text-align: center;
  }
  & > p {
    & > img {
      max-width: 100%;
      transition: all 0.3s;
    }
  }
  & > blockquote {
    border-left: 5px solid #00000066;
    background-color: #00000022;
    padding: 5px;
    border-radius: 0 5px 5px 0;
  }
  & > ul,
  ol {
    list-style-position: inside;
  }
  & > pre {
    margin: 10px 0;
    overflow-x: auto;
    background-color: #00000033;
    padding: 5px;
    border-radius: 5px;
    &::-webkit-scrollbar {
      cursor: pointer;
      height: 7px !important;
    }
  }
  & > hr {
    width: 100%;
    background-color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
  }
`;