import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateText, updateTitle } from "../../redux/slices/prefsSlice";
import {
  PreferenceSection,
  PreferenceText,
  PreferenceTextarea,
  PreferenceTextInput,
  PreferenceTitle,
} from "../pagesStyles/preferences.style";

const TextSetup = ({ foreColor, title, text }) => {
  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang,
    };
  });

  const dispatch = useAppDispatch();

  return (
    <PreferenceSection color={foreColor}>
      <PreferenceText>
        <PreferenceTitle>
          {lang === "en" ? "Set default note title" : "Заголовок по умолч."}
        </PreferenceTitle>
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
        <PreferenceTitle>
          {lang === "en" ? "Set default note text" : "Текст по умолч."}
        </PreferenceTitle>
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
