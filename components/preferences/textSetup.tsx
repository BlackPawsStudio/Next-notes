import { useAppDispatch } from "../../redux/hooks";
import { updateText, updateTitle } from "../../redux/slices/prefsSlice";
import {
  PreferenceSection,
  PreferenceText,
  PreferenceTextarea,
  PreferenceTextInput,
  PreferenceTitle,
} from "../pagesStyles/preferences.style";

const TextSetup = ({ foreColor, title, text }) => {
  const dispatch = useAppDispatch();

  return (
    <PreferenceSection color={foreColor}>
      <PreferenceText>
        <PreferenceTitle>Set default note title</PreferenceTitle>
        <PreferenceTextInput
          type="text"
          defaultValue={title}
          maxLength={25}
          foreColor={foreColor}
          onChange={(e) => {
            dispatch(updateTitle(e.target.value));
          }}
        />
      </PreferenceText>
      <PreferenceText>
        <PreferenceTitle>Set default note text</PreferenceTitle>
        <PreferenceTextarea
          spellCheck={false}
          defaultValue={text}
          foreColor={foreColor}
          maxLength={50}
          onChange={(e) => {
            dispatch(updateText(e.target.value));
          }}
        />
      </PreferenceText>
    </PreferenceSection>
  );
};

export default TextSetup;
