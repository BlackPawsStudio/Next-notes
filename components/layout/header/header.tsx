import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setModal, setObject } from "../../../redux/slices/modalSlice";
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

  const { state, object } = useAppSelector(({ modalSlice: toolkit }) => {
    return {
      state: toolkit.state,
      object: toolkit.object
    };
  });

  const router = useRouter();

  const dispatch = useAppDispatch();

  const deleteUser = async () => {
    const result = await fetch(`/api/users/?id=${id}`, {
      method: "DELETE",
    });
    const message = await result.json();
    console.log(message.message);

    dispatch(updateLogin({ id: NaN, login: "" }));
    router.push('/')
  };

  useEffect(() => {
    if (state === "yes" && object === "user") {
      deleteUser();
      dispatch(setModal("free"));
      dispatch(setObject({object: "none", id: NaN}));
    }
  }, [state]);
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
                <Button
                  onClick={() => {
                    dispatch(setObject({object: 'user'}))
                    dispatch(setModal("show"));
                  }}
                >
                  Delete User
                </Button>
              </>
            ) : (
              <>
                <Link href="/logIn" passHref>
                  <Button>Log In</Button>
                </Link>
                <Link href="/signUp" passHref>
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
