import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  Container,
  TitleText,
  BackButton,
  TimeAlert,
} from "../../components/pagesStyles/note.style";
import EditButton from "../../components/ui/note/editButton/editButton";
import Settings from "../../components/ui/note/settings/settings";
import TextField from "../../components/ui/note/textField/textField";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTitle, updateData } from "../../redux/slices/noteSlice";

const Note = ({ note }) => {
  const {
    title,
    backColor,
    foreColor,
    date,
    time,
    willRemind,
    isEditting,
  } = useAppSelector(({ noteSlice: toolkit }) => {
    return {
      title: toolkit.title,
      backColor: toolkit.backColor,
      foreColor: toolkit.foreColor,
      date: toolkit.date,
      time: toolkit.time,
      willRemind: toolkit.willRemind,
      isEditting: toolkit.isEditting,
    };
  });
  const dispatch = useAppDispatch();

  const router = useRouter();

  useEffect(() => {
    dispatch(updateData(note));
  }, []);
  return (
    <Container backColor={backColor} foreColor={foreColor}>
      <BackButton color={foreColor} onClick={() => {
        router.back()
      }} />
      <EditButton id={router.query.id} />
      <TitleText
        editting={isEditting}
        color={foreColor}
        disabled={!isEditting}
        type="text"
        defaultValue={title}
        onChange={({ target }) => dispatch(setTitle(target.value))}
      />
      <Settings />
      <TimeAlert>
        {willRemind
          ? `You will be reminded at ${time} ${date}`
          : "Reminder disabled"}
      </TimeAlert>
      <TextField id={router.query.id} color={foreColor} prevText={note.text} />
    </Container>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/notes/${id}.json`
  );
  const result = await response.json();
  
  return {
    props: {
      note: result,
    },
  };
};

export default Note;
