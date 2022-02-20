import { useAppDispatch } from "../../../../redux/hooks";
import { setText } from "../../../../redux/slices/noteSlice";
import { TextContainer } from "./textField.style";

const TextField = ({ color, prevText }) => {
  const dispatch = useAppDispatch();

  return (
    <TextContainer
      color={color}
      spellCheck={false}
      defaultValue={prevText}
      onChange={({ target }) => {
        setTimeout(() => {
          dispatch(setText(target.value));
        }, 0);
      }}
    ></TextContainer>
  );
};

export default TextField;
