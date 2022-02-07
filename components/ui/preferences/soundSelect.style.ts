import styled from "styled-components";

export const Container = styled.div.attrs(({ color }) => ({
  style: {
    color: color,
  },
}))`
  padding: 0 50px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1vh;
`;
  
export const Select = styled.select.attrs(({ color }) => ({
  style: {
    color: color,
  },
}))`
  width: 150px;
  height: 30px;
  border: 1px solid #111;
  box-shadow: 4px 4px 0 0 #111111; 
  transition: all .3s;
  padding: 5px;
  background: #ffffff77;
  &:hover{
    transform: scale(105%);
  }
`