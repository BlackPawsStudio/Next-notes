import { useAppDispatch } from "../../redux/hooks";
import {
  Color,
  InputLabel,
  InputLabelText,
} from "../ui/note/settings/settings.style";
import { updateBackColor, updateForeColor } from "../../redux/slices/prefsSlice";
import { PreferenceSection } from "../pagesStyles/preferences.style";
import SoundSelect from "../ui/preferences/soundSelect";


const MediaSetup = ({ foreColor }) => {
  const dispatch = useAppDispatch();

  return (
    <PreferenceSection>
      <InputLabel isColor={true}>
        <InputLabelText color={foreColor}>
          Set default background color
        </InputLabelText>
        <Color
          editting={true}
          disabled={false}
          type="color"
          defaultValue={"#aaaaaa"}
          onChange={(e) => dispatch(updateBackColor(e.target.value))}
        />
      </InputLabel>

      <InputLabel isColor={true}>
        <InputLabelText color={foreColor}>
          Set default text color
        </InputLabelText>
        <Color
          editting={true}
          disabled={false}
          type="color"
          defaultValue={"#111111"}
          onChange={(e) => dispatch(updateForeColor(e.target.value))}
        />
      </InputLabel>

      <SoundSelect color={foreColor} />
    </PreferenceSection>
  );
};

export default MediaSetup;