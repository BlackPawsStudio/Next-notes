import { getCurrentDate, getCurrentTime } from "../../../functions/timeFunctions";
import { useAppDispatch } from "../../../redux/hooks";
import { increaseAmount } from "../../../redux/slices/allNotesSlice";
import { Container, PlusLine } from "./newNote.style";

const NewNote = ({ oldData }) => {
  const dispatch = useAppDispatch();

  return (
    <Container
      onClick={async () => {
        oldData.push({
          title: "Note title",
          backColor: "#aaaaaa",
          foreColor: "#111111",
          date: getCurrentDate(),
          time: getCurrentTime(),
          willRemind: false,
          text: "Write here!",
          id: oldData.length,
        });
        await fetch(
          `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/notes.json`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              oldData.map((el, id) => {
                if (el) el.id = id;
                return el
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
