import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  row-gap: 7%;
  flex-direction: column;
  margin-top: 7%;
`

export const Title = styled.p`
  font-size: calc(5vh + 2vw);
  font-weight: bold;
  text-align: center;
  user-select: none;
  color: #111;
  padding: 0 10%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;  
  padding-bottom: 7%;
`;

type PreferenceColorProps = {
  backColor?: string,
  foreColor?: string
}

export const PreferenceSection = styled.div.attrs<PreferenceColorProps>(
  ({ backColor, foreColor }) => ({
    style: {
      background: backColor,
      color: foreColor
    },
  })
) <PreferenceColorProps>`
  width: 300px;
  height: 50vh;
  box-shadow: 10px 10px #111;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 10% 0;
`;

export const PreferenceText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 2vh;
`

export const PreferenceTitle = styled.p`

`;

export const PreferenceTextInput = styled.input`
  width: 100%;
`

export const PreferenceTextarea = styled.textarea`
  width: 100%;
  resize: none;
  height: 50px;
`