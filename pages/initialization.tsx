import { useState } from "react"
import { Button, Buttons, Container, Input, Inputs, Modal, Title } from "../components/pagesStyles/initialization.style"

const Initialization = ({ isFirstTime }) => {
  const [isLogin, setIsLogin] = useState(!isFirstTime)
  
  const onSubmit = (e) => {
    e.preventDefault()
    
  } 
  return (
    <Container>
      <Modal onSubmit={onSubmit}>
        <Title>{isLogin ? "Log in" : "Sign in"}</Title>
        <Inputs>
          <Input type="text" placeholder="Login" autoFocus={true} />
          <Input type="password" placeholder="Password" />
        </Inputs>
        <Buttons>
          <Button>Confirm</Button>
          <Button>Sign up</Button>
        </Buttons>
      </Modal>
    </Container>
  );
}

export default Initialization