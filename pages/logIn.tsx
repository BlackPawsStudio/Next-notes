import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Additional,
  Button,
  Buttons,
  Container,
  Input,
  Inputs,
  Modal,
  Title,
} from "../components/pagesStyles/initialization.style";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateLogin } from "../redux/slices/userSlice";
import { updateAll } from "../redux/slices/prefsSlice";
import { setAlert } from "../redux/slices/modalSlice";

const Initialization = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang,
    };
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `/api/users?login=${login}&password=${password}`
    );
    const result = await response.json();
    if (result.message) {
      dispatch(setAlert(result.message));
    } else {
      dispatch(updateLogin({ id: result.id, login: result.login }));
      dispatch(updateAll(result.prefs));
      localStorage.setItem("next-notes-login", result.login);
      localStorage.setItem("next-notes-pass", result.password);
      router.push("/notes");
    }
  };
  return (
    <Container>
      <Modal onSubmit={onSubmit}>
        <Title>{lang === "en" ? "Log in" : "Войти"}</Title>
        <Inputs>
          <Input
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            type="text"
            placeholder={lang === "en" ? "Login" : "Логин"}
            autoFocus={true}
            required
            minLength={2}
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder={lang === "en" ? "Password" : "Пароль"}
            required
            minLength={5}
          />
        </Inputs>
        <Buttons>
          <Button>{lang === "en" ? "Confirm" : "Подтвердить"}</Button>
          <Additional>
            {lang === "en" ? "Don't have an account?" : "Еще нет аккаунта?"}
            <Link href="/signUp" passHref>
              <Button>{lang === "en" ? "Sign up" : "Регистрация"}</Button>
            </Link>
          </Additional>
        </Buttons>
      </Modal>
    </Container>
  );
};

export default Initialization;
