import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateLogin } from "../../../redux/slices/userSlice";
import {
  AccountButtons,
  Button,
  Container,
  Burger,
  Nav,
  NavLink,
  Content,
  Logo,
  AccountLabel,
} from "./header.styles";

const Header = () => {
  const [focus, setFocus] = useState(false);
  const { login } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      login: toolkit.login
    }
  })
  const dispatch = useAppDispatch()

  return (
    <Container>
      <Link href="/">
        <Logo>Next notes</Logo>
      </Link>
      <div
        style={{ marginLeft: "auto", display: "flex" }}
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
      >
        <Content focus={focus}>
          <Burger focus={focus}></Burger>

          <nav>
            <Nav>
              <Link href="/notes">
                <NavLink>All</NavLink>
              </Link>
              <Link href="/preferences">
                <NavLink>Prefs</NavLink>
              </Link>
            </Nav>
          </nav>
          <AccountButtons>
            {login ? (
              <>
                <AccountLabel>{login}</AccountLabel>
                <Link href="/">
                  <Button onClick={() => dispatch(updateLogin({id: 0, login: ''}))}>Log Out</Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/logIn">
                  <Button>Log In</Button>
                </Link>
                <Link href="/signIn">
                  <Button>Sign In</Button>
                </Link>
              </>
            )}
          </AccountButtons>
        </Content>
      </div>
    </Container>
  );
};

export default Header;
