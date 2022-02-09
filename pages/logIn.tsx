import Link from "next/link";
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

const Initialization = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const a = await fetch("/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    });
    console.log(await a.json());
  };
  return (
    <Container>
      <Modal onSubmit={onSubmit}>
        <Title>Log in</Title>
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
            Don't have an account?
            <Link href="/signIn">
              <Button>Sign up</Button>
            </Link>
          </Additional>
        </Buttons>
      </Modal>
    </Container>
  );
};

export default Initialization;
