import { Main } from "./main.style";
import Background from "./background/background";
import Header from "./header/header";
import ConfirmModal from "../ui/modal/delete/confirmModal";
import Saver from "../functional/saver";
import InfoModal from "../ui/modal/info/infoModal";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setLang } from "../../redux/slices/languageSlice";

const Layout = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const language = navigator.language;
    dispatch(setLang(language.includes("ru") ? "ru" : "en"));
  }, []);

  return (
    <>
      <ConfirmModal />
      <InfoModal />
      <Saver />
      <Header />
      <Main>{children}</Main>
      <Background></Background>
    </>
  );
};

export default Layout;
