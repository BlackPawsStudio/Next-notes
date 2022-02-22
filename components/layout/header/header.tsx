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
      object: toolkit.object,
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
    router.push("/");
  };

  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang,
    };
  });

  useEffect(() => {
    if (state === "yes" && object === "user") {
      deleteUser();
      dispatch(setModal("free"));
      dispatch(setObject({ object: "none", id: NaN }));
      localStorage.removeItem("next-notes-login");
      localStorage.removeItem("next-notes-pass");
    }
  }, [state]);
  return (
    <Container>
      <Link href="/" passHref>
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
                <NavLink>{lang === "en" ? "All" : "Все"}</NavLink>
              </Link>
              <Link href="/preferences" passHref>
                <NavLink>{lang === "en" ? "Prefs" : "Настр."}</NavLink>
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
                      localStorage.removeItem("next-notes-login");
                      localStorage.removeItem("next-notes-pass");
                    }}
                  >
                    {lang === "en" ? "Log Out" : "Выйти"}
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    dispatch(setObject({ object: "user" }));
                    dispatch(setModal("show"));
                  }}
                >
                  {lang === "en" ? "Delete User" : "Удалить акк."}
                </Button>
              </>
            ) : (
              <>
                <Link href="/logIn" passHref>
                  <Button>{lang === "en" ? "Log In" : "Войти"}</Button>
                </Link>
                <Link href="/signUp" passHref>
                  <Button>{lang === "en" ? "Sign Up" : "Регистр."}</Button>
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
