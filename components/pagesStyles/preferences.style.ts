import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  row-gap: 7%;
  flex-direction: column;
  margin-top: 3%;
`;

export const Title = styled.p`
  font-size: calc(5vh + 2vw);
  font-weight: bold;
  text-align: center;
  user-select: none;
  color: #111;
  padding: 0 10%;
`;

export const Content = styled.div.attrs<PreferenceColorProps>(
  ({ backColor, foreColor }) => ({
    style: {
      background: backColor,
      color: foreColor,
    },
  })
)<PreferenceColorProps>`
  box-shadow: 10px 10px #111;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 3%;
`;

type PreferenceColorProps = {
  backColor?: string;
  foreColor?: string;
};

export const PreferenceSection = styled.div.attrs(({ color }) => ({
  style: {
    color: color,
  },
}))`
  width: 300px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 5vh;
  flex-direction: column;
`;

export const PreferenceText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1vh;
`;

export const PreferenceTitle = styled.p``;

export const PreferenceTextInput = styled.input.attrs<PreferenceColorProps>(
  ({ foreColor }) => ({
    style: {
      color: foreColor,
    },
  })
)<PreferenceColorProps>`
  width: 100%;
  height: 35px;
  padding: 10px;
  box-shadow: 3px 3px #111;
  border: 1px solid #111111;
  background: #ffffff55;
`;

export const PreferenceTextarea = styled.textarea.attrs<PreferenceColorProps>(
  ({ foreColor }) => ({
    style: {
      color: foreColor,
    },
  })
)<PreferenceColorProps>`
  width: 100%;
  resize: none;
  height: 20vh;
  padding: 10px;
  box-shadow: 3px 3px #111;
  border: 1px solid #111111;
  background: #ffffff55;
`;
