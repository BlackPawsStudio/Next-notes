import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { decreaseAmount } from "../../../../redux/slices/allNotesSlice";
import { updateData } from "../../../../redux/slices/noteSlice";
import {
  Btn,
  TextContainer,
  Container,
  Date,
  Time,
  TimeContainer,
  TimeSeparator,
  Title,
} from "./note.style";

const Note = ({ note, id }) => {
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      userId: toolkit.id
    }
  })

  const { title, backColor, foreColor, date, time, willRemind, text } = note;

  const deleteNote = async (id) => {
    await fetch(
      `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/notes/${id}.json`,
      {
        method: "DELETE",
      }
    );
  };

  return (
    <Container backColor={backColor} foreColor={foreColor}>
      <Title color={foreColor}>{title}</Title>
      <TimeContainer color={foreColor}>
        {willRemind ? (
          <>
            <Date color={foreColor} type="date" defaultValue={date} />
            <TimeSeparator color={foreColor}></TimeSeparator>
            <Time color={foreColor}>{time}</Time>
          </>
        ) : (
          "Reminder disabled"
        )}
      </TimeContainer>
      <TextContainer
        color={foreColor}
        disabled
        defaultValue={text}
      ></TextContainer>
      <Link href={`notes/${id}`}>
        <Btn
          color={foreColor}
          onClick={() => {
            dispatch(updateData(note));
          }}
          delete={false}
        >
          Change note
        </Btn>
      </Link>
      <Btn
        color={foreColor}
        delete
        onClick={async () => {
          await deleteNote(id);
          dispatch(decreaseAmount())
        }}
      >
        Delete note
      </Btn>
    </Container>
  );
};

export default Note;
