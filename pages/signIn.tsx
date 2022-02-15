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
import { useAppDispatch } from "../redux/hooks";
import { updateAll } from "../redux/slices/prefsSlice";
import { updateLogin } from "../redux/slices/userSlice";

const Initialization = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `/api/users?login=${login}&password=${password}`,
      {
        method: "POST",
      }
    );
    const result = await response.json();
    console.log(result);
    
    if (result.message) {
      alert(result.message);
    } else {
      dispatch(updateLogin({ id: result.id, login: result.login }));
      dispatch(updateAll(result.prefs));
      router.push("/notes");
    }
  };
  return (
    <Container>
      <Modal onSubmit={onSubmit}>
        <Title>Sign in</Title>
        <Inputs>
          <Input
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            type="text"
            placeholder="Login"
            autoFocus={true}
            required
            minLength={2}
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            required
            minLength={5}
          />
        </Inputs>
        <Buttons>
          <Button>Confirm</Button>
          <Additional>
            Already have an account?
            <Link href="/logIn">
              <Button>Log in</Button>
            </Link>
          </Additional>
        </Buttons>
      </Modal>
    </Container>
  );
};

export default Initialization;
