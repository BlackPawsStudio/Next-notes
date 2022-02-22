import { Main } from "./main.style";
import Background from "./background/background";
import Header from "./header/header";
import ConfirmModal from "../ui/modal/delete/confirmModal";
import Saver from "../functional/saver";
import InfoModal from "../ui/modal/info/infoModal";

const Layout = ({ children }) => {  
  return (
    <>
      <ConfirmModal />
      <InfoModal />
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
