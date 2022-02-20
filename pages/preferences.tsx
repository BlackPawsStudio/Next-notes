import { useEffect } from "react";
import Redirector from "../components/functional/redirector";
import {
  Container,
  Content,
  Title,
} from "../components/pagesStyles/preferences.style";
import MediaSetup from "../components/preferences/mediaSetup";
import TextSetup from "../components/preferences/textSetup";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setTarget } from "../redux/slices/saverSlice";

const PreferencesPage = () => {
  const { backColor, foreColor, title, text, sound } = useAppSelector(
    ({ prefsSlice: toolkit }) => {
      return {
        backColor: toolkit.backColor,
        foreColor: toolkit.foreColor,
        title: toolkit.title,
        text: toolkit.text,
        sound: toolkit.sound,
      };
    }
  );

  const dispatch = useAppDispatch()

  useEffect(() => {
    return (() => {
      dispatch(setTarget("prefs"))
    })
  }, [])

  return (
    <Container>
      <Redirector />
      <Title>Set up your default note</Title>
      <Content onMouseLeave={() => {}} backColor={backColor}>
        <MediaSetup foreColor={foreColor} backColor={backColor} sound={sound} />
        <TextSetup foreColor={foreColor} title={title} text={text} />
      </Content>
    </Container>
  );
};

export default PreferencesPage;
