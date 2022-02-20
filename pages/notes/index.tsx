import { useEffect, useState } from "react";
import Note from "../../components/ui/note/note/note";
import NewNote from "../../components/ui/newNote/newNote";
import {
  Container,
  NoteContainer,
  Title,
} from "../../components/pagesStyles/allNotes.style";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Redirector from "../../components/functional/redirector";
import { setNotifications } from "../../redux/slices/notificationSlice";
import { setTarget } from "../../redux/slices/saverSlice";

type NoteType = {
  title: string;
  backColor: string;
  foreColor: string;
  date: string;
  time: string;
  id: number;
  willRemind: boolean;
  text: string;
  isEditting: boolean;
};

const AllNotesPage = () => {
  const [allNotes, setAllNotes] = useState([]);

  const { amount } = useAppSelector(({ amountSlice: toolkit }) => {
    return {
      amount: toolkit.amount,
    };
  });

  const { id } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      id: toolkit.id,
    };
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getAllNotes = async () => {
      const response = await fetch(
        `/api/notes/?user=${id}`
      );
      const result = await response.json();
      const notes:Array<NoteType> = Object.values(result)
      setAllNotes(notes ? notes : []);

      if (notes) {
        const noted = notes.filter((el) => {
          if (el)
            if (el.willRemind) {
              return el;
            }
        });
        dispatch(
          setNotifications(
            noted.map((el) => {
              return {
                time: el.time,
                date: el.date,
              };
            })
          )
        );
      }
    };
    getAllNotes();
  }, [amount, dispatch, id]);
  
  return (
    <Container>
      <Redirector />
      <Title>Your all notes</Title>
      <NoteContainer>
        {typeof allNotes === "string"
          ? allNotes
          : allNotes.map((el) =>
              el ? <Note key={el.id} id={el.id} note={el}></Note> : ""
            )}
        <NewNote oldData={allNotes} />
      </NoteContainer>
    </Container>
  );
};

export default AllNotesPage;
