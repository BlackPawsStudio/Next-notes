import { Main } from "./main.style";
import Background from "./background/background";
import Header from "./header/header";
import ConfirmModal from "../ui/deleteModal/confirmModal";
import Saver from "../functional/saver";

const Layout = ({ children }) => {  
  return (
    <>
      <ConfirmModal />
      <Saver />
      <Header />
      <Main>
        {children}
      </Main>
      <Background></Background>
    </>
  );
};

export default Layout;
