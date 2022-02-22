import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { decreaseAmount } from "../../../../redux/slices/allNotesSlice";
import { setModal, setObject } from "../../../../redux/slices/modalSlice";
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
  Buttons,
} from "./note.style";
import ReactMarkdown from "react-markdown";

const Note = ({ note, id }) => {
  const dispatch = useAppDispatch();

  const { userId } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      userId: toolkit.id,
    };
  });
  const { title, backColor, foreColor, date, time, willRemind, text } = note;

  const { modal, object, noteId } = useAppSelector(
    ({ modalSlice: toolkit }) => {
      return {
        modal: toolkit.state,
        object: toolkit.object,
        noteId: toolkit.id,
      };
    }
  );

  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang,
    };
  });

  const deleteNote = async (id) => {
    await fetch(`/api/notes?user=${userId}&note=${id}`, {
      method: "DELETE",
    });
    dispatch(decreaseAmount());
  };

  useEffect(() => {
    if (modal === "yes" && object === "note" && id === noteId) {
      deleteNote(id);
      dispatch(setModal("free"));
      dispatch(setObject({ object: "none", id: NaN }));
    }
  }, [modal]);

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
        ) : lang === "en" ? (
          "Reminder disabled"
        ) : (
          "Уведомление выкл."
        )}
      </TimeContainer>
      <TextContainer color={foreColor}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </TextContainer>
      <Buttons>
        <Link href={`notes/${id}`} passHref>
          <Btn
            color={foreColor}
            onClick={() => {
              dispatch(updateData(note));
            }}
          >
            {lang === "en" ? "Change note" : "Изменить"}
          </Btn>
        </Link>
        <Btn
          color={foreColor}
          delete
          onClick={() => {
            dispatch(setObject({ object: "note", id: id }));
            dispatch(setModal("show"));
          }}
        >
          {lang === "en" ? "Delete note" : "Удалить"}
        </Btn>
      </Buttons>
    </Container>
  );
};

export default Note;
