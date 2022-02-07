import {
  Container,
  Content,
  Title,
} from "../components/pagesStyles/preferences.style";
import MediaSetup from "../components/preferences/mediaSetup";
import TextSetup from "../components/preferences/textSetup";
import { useAppSelector } from "../redux/hooks";

const PreferencesPage = () => {

  const { backColor, foreColor, title, text } = useAppSelector(
    ({ prefsSlice: toolkit }) => {
      return {
        backColor: toolkit.backColor,
        foreColor: toolkit.foreColor,
        title: toolkit.title,
        text: toolkit.text,
      };
    }
  );

  return (
    <Container>
      <Title>Set up your default note</Title>
      <Content onMouseLeave={() => {}} backColor={backColor}>
        <MediaSetup foreColor={foreColor} />
        <TextSetup
          foreColor={foreColor}
          title={title}
          text={text}
        />
      </Content>
    </Container>
  );
};

export default PreferencesPage;
