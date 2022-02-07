import styled from "styled-components";

type ContainerProps = {
  color: string,
  editting: boolean
}

export const Container = styled.div.attrs<ContainerProps>(({ color, editting }) => ({
  style: {
    background: color,
    height: editting ? "fit-content" : 0,
    padding: editting ? "2vh 10%" : "0",
    overflow: editting ? 'visible' : 'hidden'
  },
}))<ContainerProps>`
  transition: all 0.3s;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2vw;
  row-gap: 2vw;
  border-top: 1px solid #111;
  border-bottom: 1px solid #111;
  z-index: 1;
`;

export const InputLabel = styled.div<{ isColor }>`
  height: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${(props) => (props.isColor ? "25%" : "40%")};
  min-width: 150px;
  flex-wrap: wrap;
  row-gap: 5px;
  column-gap: 10px;
  cursor: pointer;
  padding: 7px 15px;
  &:hover {
    background-color: #ffffff40;
  }
`;

export const InputLabelText = styled.label.attrs(
  ({ color }) => ({
    style: {
      color: color
    },
  })
)`
  text-align: center;
`;

export const SettingsSeparator = styled.div`
  height: 90%;
  width: 1px;
  background-color: #111;
`;

export const Color = styled.input<{editting}>`
  position: absolute;
  top: 0;
  left: 0;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  border: none;
  opacity: ${props => props.editting ? '30%' : '0'};
  overflow: hidden;
  outline: none;
`;
