import { Main } from "./main.style";
import Background from "./background/background";
import Header from "./header/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Background></Background>
    </>
  );
};

export default Layout;
