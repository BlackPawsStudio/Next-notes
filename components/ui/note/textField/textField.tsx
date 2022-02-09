import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setText } from "../../../../redux/slices/noteSlice";
import { TextContainer } from "./textField.style";

const TextField = ({ id, color, prevText }) => {
  const dispatch = useAppDispatch();

  const saveText = async (text) => {
    const response = await fetch(
      `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/0/notes/${id}/text.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      }
    );
    return await response.json();
  };
  
  return (
    <TextContainer
      color={color}
      spellCheck={false}
      defaultValue={prevText}
      onChange={async ({ target }) => {
        dispatch(setText(target.value));
        await saveText(target.value);
      }}
    ></TextContainer>
  );
};

export default TextField;
