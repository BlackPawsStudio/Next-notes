import {
  Container,
  Content,
  PreferenceSection,
  PreferenceText,
  PreferenceTextarea,
  PreferenceTextInput,
  PreferenceTitle,
  Title,
} from "../components/pagesStyles/preferences.style";
import { Color, InputLabel, InputLabelText } from "../components/ui/note/settings/settings.style";

const PreferencesPage = () => {
  return (
    <Container>
      <Title>Set up your default note</Title>
      <Content>
        <PreferenceSection backColor={"#aaaaaa"} foreColor={"#111111"}>
          <InputLabel isColor={true}>
            <InputLabelText>Set default background color</InputLabelText>
            <Color
              editting={true}
              disabled={false}
              type="color"
              defaultValue={"#aaaaaa"}
            />
          </InputLabel>

          <InputLabel isColor={true}>
            <InputLabelText>Set default text color</InputLabelText>
            <Color
              editting={true}
              disabled={false}
              type="color"
              defaultValue={"#111111"}
            />
          </InputLabel>
        </PreferenceSection>

        <PreferenceSection backColor={"#aaaaaa"}>
          <PreferenceText>
            <PreferenceTitle>Set default note title</PreferenceTitle>
            <PreferenceTextInput />
          </PreferenceText>
          <PreferenceText>
            <PreferenceTitle>Set default note text</PreferenceTitle>
            <PreferenceTextarea spellCheck={false}  />
          </PreferenceText>
        </PreferenceSection>
      </Content>
    </Container>
  );
};

export default PreferencesPage;
