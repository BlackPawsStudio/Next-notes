import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Notification from "../../components/functional/notifications";
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
import { setTarget } from "../../redux/slices/saverSlice";

const Note = () => {
  const data = useAppSelector(({ noteSlice: toolkit }) => {
    return {
      title: toolkit.title,
      backColor: toolkit.backColor,
      foreColor: toolkit.foreColor,
      text: toolkit.text,
      date: toolkit.date,
      time: toolkit.time,
      willRemind: toolkit.willRemind,
      isEditting: toolkit.isEditting,
      id: toolkit.id,
    };
  });

  const { userId } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      userId: toolkit.id,
    };
  });
 
  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang
    }
 })
  
  const dispatch = useAppDispatch();

  const router = useRouter();

  const getData = async () => {
    const response = await fetch(
      `/api/notes/?user=${userId}&note=${router.query.id}`
    );
    const note = await response.json();
    dispatch(updateData(note));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setTarget("note"));
    };
  }, []);

  return (
    <Container backColor={data.backColor} foreColor={data.foreColor}>
      <Redirector />
      <BackButton
        color={data.foreColor}
        onClick={() => {
          router.back();
        }}
      />
      <EditButton id={router.query.id} />
      <TitleText
        editting={data.isEditting}
        color={data.foreColor}
        disabled={!data.isEditting}
        type="text"
        maxLength={15}
        defaultValue={data.title}
        onChange={({ target }) => dispatch(setTitle(target.value))}
      />
      <Settings />
      <TimeAlert>
        {data.willRemind
          ? `${lang === "en" ? "You will be reminded at" : "Вас уведомят в"} ${data.time} ${data.date}`
          : lang === "en" ? "Reminder disabled" : "Напоминание выключено"}
      </TimeAlert>
      <TextField color={data.foreColor} prevText={data.text} />
    </Container>
  );
};

export default Note;
