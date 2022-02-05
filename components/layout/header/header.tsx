import Link from "next/link";
import { useState } from "react";
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
            <Link href="/initialization">
              <Button>Log In</Button>
            </Link>
            <Link href="/initialization">
              <Button>Sign In</Button>
            </Link>
          </AccountButtons>
        </Content>
      </div>
    </Container>
  );
};

export default Header;
