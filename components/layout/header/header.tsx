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
} from "./header.styles";

const Header = () => {
  const [focus, setFocus] = useState(false);
  const { id, login } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      id: toolkit.id,
      login: toolkit.login,
    };
  });
  const dispatch = useAppDispatch();

  const deleteUser = async () => {
    await fetch(
      `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`,
      {
        method: "DELETE",
      }
    );
    dispatch(updateLogin({ id: 0, login: "" }));
  };
  return (
    <Container>
      <Link href="/notes" passHref>
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
              <Link href="/notes" passHref>
                <NavLink>All</NavLink>
              </Link>
              <Link href="/preferences" passHref>
                <NavLink>Prefs</NavLink>
              </Link>
            </Nav>
          </nav>
          <AccountButtons>
            {login ? (
              <>
                <Link href="/" passHref>
                  <Button
                    onClick={() => {
                      dispatch(updateLogin({ id: NaN, login: "" }));
                    }}
                  >
                    Log Out
                  </Button>
                </Link>
                <Link href="/" passHref>
                  <Button
                    onClick={async () => {
                      await deleteUser();
                    }}
                  >
                    Delete User
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/logIn" passHref>
                  <Button>Log In</Button>
                </Link>
                <Link href="/signIn" passHref>
                  <Button>Sign Up</Button>
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
