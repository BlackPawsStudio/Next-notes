import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setText } from "../../../../redux/slices/noteSlice";
import { TextContainer } from "./textField.style";

const TextField = ({ id, color, prevText }) => {
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      userId: toolkit.id,
    };
  });

  const { text } = useAppSelector(({ noteSlice: toolkit }) => {
    return {
      text: toolkit.text,
    };
  });

  const saveText = async (text) => {
    const response = await fetch(
      `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/notes/${id}/text.json`,
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

  useEffect(() => {
    return () => {
      saveText(text);
    };
  });

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
