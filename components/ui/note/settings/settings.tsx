import {
  Color,
  InputLabel,
  Container,
  InputLabelText,
} from "./settings.style";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  setBackColor,
  setForeColor,
} from "../../../../redux/slices/noteSlice";
import TimeSettings from "./timeSettings";

const Settings = () => {
  const { backColor, foreColor, isEditting } =
    useAppSelector(({ noteSlice: toolkit }) => {
      return {
        backColor: toolkit.backColor,
        foreColor: toolkit.foreColor,
        isEditting: toolkit.isEditting
      };
    });
  const dispatch = useAppDispatch();

  return (
    <Container color={backColor} editting={isEditting}>
      <InputLabel isColor={true}>
        <InputLabelText>Change background color</InputLabelText>
        <Color
          editting={isEditting}
          disabled={!isEditting}
          type="color"
          onChange={(e) => dispatch(setBackColor(e.target.value))}
          defaultValue={backColor}
        />
      </InputLabel>
      <InputLabel isColor={true}>
        <InputLabelText>Change text color</InputLabelText>
        <Color
          editting={isEditting}
          disabled={!isEditting}
          type="color"
          onChange={(e) => dispatch(setForeColor(e.target.value))}
          defaultValue={foreColor}
        ></Color>
      </InputLabel>
      <TimeSettings />
    </Container>
  );
};

export default Settings;
