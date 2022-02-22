import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  Color,
  InputLabel,
  InputLabelText,
} from "../ui/note/settings/settings.style";
import { updateBackColor, updateForeColor } from "../../redux/slices/prefsSlice";
import { PreferenceSection } from "../pagesStyles/preferences.style";
import SoundSelect from "../ui/preferences/soundSelect";


const MediaSetup = ({ foreColor, backColor, sound }) => {
  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang,
    };
  });

  const dispatch = useAppDispatch();

  return (
    <PreferenceSection>
      <InputLabel isColor={true}>
        <InputLabelText color={foreColor}>
          {lang === "en" ? "Set default back color" : "Цвет фона по умолч."}
        </InputLabelText>
        <Color
          editting={true}
          disabled={false}
          type="color"
          defaultValue={backColor}
          onChange={(e) => dispatch(updateBackColor(e.target.value))}
        />
      </InputLabel>

      <InputLabel isColor={true}>
        <InputLabelText color={foreColor}>
          {lang === "en" ? "Set default text color" : "Цвет текста по умолч."}
        </InputLabelText>
        <Color
          editting={true}
          disabled={false}
          type="color"
          defaultValue={foreColor}
          onChange={(e) => dispatch(updateForeColor(e.target.value))}
        />
      </InputLabel>

      <SoundSelect color={foreColor} sound={sound} />
    </PreferenceSection>
  );
};

export default MediaSetup;