import styled from "styled-components";

export const Date = styled.input.attrs(({ color }) => ({
  style: {
    color: color,
  },
}))`
  text-align: center;
  width: 100px;
  border: 0;
  background: none;
  position: relative;
  margin-top: 5px;
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    position: absolute;
    opacity: 0;
    background-color: red;
    right: 0;
    width: 100%;
  }
`;

export const Time = styled.div``;

export const TimeInput = styled.input.attrs(({ color }) => ({
  style: {
    color: color,
  },
}))`
  width: 20px;
  border: 1px solid #111;
  background: #ffffff99;
  text-align: center;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Reminder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`;

export const ReminderCheck = styled.input``;

export const ReminderSetup = styled.div`
  width: 135px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
