import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Redirector from "../../components/functional/redirector";
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

interface Note {

}

const Note = () => {
  const { title, backColor, foreColor, text, date, time, willRemind, isEditting } =
    useAppSelector(({ noteSlice: toolkit }) => {
      return {
        title: toolkit.title,
        backColor: toolkit.backColor,
        foreColor: toolkit.foreColor,
        text: toolkit.text,
        date: toolkit.date,
        time: toolkit.time,
        willRemind: toolkit.willRemind,
        isEditting: toolkit.isEditting,
      };
    });
  const { id } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      id: toolkit.id,
    };
  });
  const dispatch = useAppDispatch();

  const router = useRouter();

  useEffect(() => {
    async () => {
      const response = await fetch(
        `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${id}/notes/${router.query.id}.json`
      );
      const note = await response.json()
      dispatch(updateData(note));
    };
  }, []);
  return (
    <Container backColor={backColor} foreColor={foreColor}>
      <Redirector />
      <BackButton
        color={foreColor}
        onClick={() => {
          router.back();
        }}
      />
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
      <TextField id={router.query.id} color={foreColor} prevText={text} />
    </Container>
  );
};

export default Note;
