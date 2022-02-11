import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setEditting } from "../../../../redux/slices/noteSlice";
import { Button } from "./editButton.style";

const EditButton = ({id}) => {
  const {
    title,
    backColor,
    foreColor,
    date,
    time,
    text,
    willRemind,
    isEditting,
  } = useAppSelector(({ noteSlice: toolkit }) => {
    return {
      title: toolkit.title,
      backColor: toolkit.backColor,
      foreColor: toolkit.foreColor,
      date: toolkit.date,
      time: toolkit.time,
      text: toolkit.text,
      willRemind: toolkit.willRemind,
      isEditting: toolkit.isEditting,
    };
  });
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      userId: toolkit.id,
    };
  })

  const saveSettings = async () => {
    const response = await fetch(
      `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/notes/${id}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          backColor: backColor,
          foreColor: foreColor,
          date: date,
          time: time,
          text: text,
          id: id,
          willRemind: willRemind,
        }),
      }
    );
    return await response.json()
  }

  const onClick = async () => {
    dispatch(setEditting());
    if (isEditting) {
      await saveSettings();
    }
  };

  return <Button editting={isEditting} onClick={onClick}></Button>;
};

export default EditButton;
