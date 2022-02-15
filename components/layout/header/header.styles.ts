import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #111;
  display: flex;
  padding: 0 10vw;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 3;
`;

export const Logo = styled.a`
  width: calc(7vw + 7vh);
  font-size: 0;
  background-image: url(/icons/logo.svg);
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  filter: invert(100%);
  cursor: pointer;
  @media (max-width: 850px) {
    background-image: url(/icons/logo.min.svg);
  }
`;

export const Nav = styled.ul`
  display: flex;
  column-gap: 10vw;
  list-style: none;
  width: fit-content;
  @media (max-width: 850px) {
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const NavLink = styled.li`
transition: all .3s;
  font-size: calc(2vh + 1vw);
  cursor: pointer;
  &:hover{
    text-shadow: 0 0 5px #fff;
  }
  @media (max-width: 850px) {
    font-size: 3vh;
  }
`;

export const AccountButtons = styled.div`
  height: 6vh;
  display: flex;
  align-items: center;
  column-gap: 5vw;
  @media (max-width: 850px) {
    flex-direction: column;
    row-gap: 10px;
    height: calc(12vh + 10px);
  }
`;

export const Button = styled.button`
  padding: 4px;
  border: 2px solid #fff;
  background: none;
  color: #fff;
  font-size: 3vh;
  cursor: pointer;
  transition: all 0.3s;
  &:focus {
    border: 2px solid #fff;
    background-color: #fff;
    color: #111;
  }
  &:hover {
    color: #111;
    background-color: #fff;
  }
  &:active {
    background-color: #555;
    color: #fff;
  }
`;

export const Burger = styled.div<{ focus }>`
  display: none;
  @media (max-width: 850px) {
    display: block;
    width: 30px;
    min-height: 30px;
    background-image: url(/icons/accountBtns.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s;
    transform: ${(props) => (props.focus ? "rotate(180deg)" : "")};
  }
`;

export const Content = styled.div<{ focus }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65vw;
  margin-left: auto;
  transition: all 0.3s;
  @media (max-width: 850px) {
    flex-direction: column;
    margin-top: 2vh;
    width: fit-content;
    padding: ${(props) => (props.focus ? "5px" : "0")};
    height: ${(props) => (props.focus ? "calc(25vw + 25vh)" : "30px")};
    background-color: #111;
    overflow: hidden;
    padding-bottom: 10px;
  }
`;

export const AccountLabel = styled.p`
  font-size: 4vh;
`