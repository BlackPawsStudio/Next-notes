import styled from "styled-components";

type ContainerProps = {
  backColor: string;
  foreColor: string;
};

export const Container = styled.div.attrs<ContainerProps>(
  ({ backColor, foreColor }) => ({
    style: {
      background: backColor,
      color: foreColor,
    },
  })
)<ContainerProps>`
  width: 100%;
  margin: 7vh 15vw;
  position: relative;
  display: grid;
  grid-template-rows: 11vh 0vh 6vh auto;
  overflow: hidden;
  @media (max-width: 850px) {
    margin: 7vh 0;
  }
`;

type TitleTextProps = {
  color: string;
  editting: boolean;
};

export const TitleText = styled.input.attrs<TitleTextProps>(
  ({ color, editting }) => ({
    style: {
      color: color,
      border: editting ? "1px solid #111" : "none",
      background: editting ? "#ffffff99" : "none",
    },
  })
)<TitleTextProps>`
  transition: all 0.3s;
  margin: 3vh 25%;
  width: 50%;
  text-align: center;
  font-weight: bold;
  font-size: 4.5vh;
`;

export const BackButton = styled.div.attrs(({ color }) => ({
  style: {
    color: color,
  },
}))`
  position: absolute;
  padding: 2px;
  left: 2vw;
  top: calc(11vh / 2);
  transform: translateY(-50%) rotate(90deg);
  width: 5vh;
  height: 5vh;
  mix-blend-mode: difference;
  background-image: url(/icons/accountBtns.svg);
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: none;
  font-size: 50px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-50%) scale(115%) rotate(90deg);
  }
  &:active {
    transform: translateY(-50%) scale(95%) rotate(90deg);
  }
`;

export const TextContainer = styled.textarea.attrs(({ color }) => ({
  style: {
    color: color,
  },
}))`
  width: 98%;
  background: #ffffff33;
  border: none;
  resize: none;
  padding: calc(1vw + 1vh);
  margin: 10px auto calc(1vw + 1vh);
`;

export const TimeAlert = styled.label`
  text-align: center;
  margin: auto;
  font-size: 3vh;
  margin-top: 1vh;
`;
