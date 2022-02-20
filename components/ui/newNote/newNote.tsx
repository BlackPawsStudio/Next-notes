import {
  getCurrentDate,
  getCurrentTime,
} from "../../../functions/timeFunctions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { increaseAmount } from "../../../redux/slices/allNotesSlice";
import { Container, PlusLine } from "./newNote.style";

const NewNote = ({ oldData }) => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      id: toolkit.id,
    };
  });

  const { title, backColor, foreColor, text } = useAppSelector(({ prefsSlice: toolkit }) => {
    return {
      title: toolkit.title,
      backColor: toolkit.backColor,
      foreColor: toolkit.foreColor,
      text: toolkit.text
    }
  }) 

  return (
    <Container
      onClick={async () => {
        oldData.push({
          title: title,
          backColor: backColor,
          foreColor: foreColor,
          date: getCurrentDate(),
          time: getCurrentTime(),
          willRemind: false,
          text: text,
          id: oldData.length,
        });
        await fetch(
          `/api/notes?user=${id}&new=true`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              oldData.map((el, id) => {
                if (el) el.id = id;
                return el;
              })
            ),
          }
        );
        dispatch(increaseAmount());
      }}
    >
      <PlusLine />
      <PlusLine horizontal />
    </Container>
  );
};

export default NewNote;
