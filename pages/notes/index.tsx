import { useEffect, useState } from "react";
import Note from "../../components/ui/note/note/note";
import NewNote from "../../components/ui/newNote/newNote";
import {
  Container,
  NoteContainer,
  Title,
} from "../../components/pagesStyles/allNotes.style";
import { useAppSelector } from "../../redux/hooks";
import { getCurrentDate, getCurrentTime, isTimeAhead } from "../../functions/timeFunctions";
import Redirector from "../../components/functional/redirector";

const AllNotesPage = () => {
  const [allNotes, setAllNotes] = useState([]);

  const { amount } = useAppSelector(({ amountSlice: toolkit }) => {
    return {
      amount: toolkit.amount,
    };
  });

  const { id } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      id: toolkit.id
    }
  })

  useEffect(() => {
    const getAllNotes = async () => {
      const response = await fetch(
        `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${id}/notes.json`
      );
      const result = await response.json();
      setAllNotes(result ? Object.values(result) : []);
    };

    getAllNotes();
  }, [amount]);

  useEffect(() => {
    if (allNotes) {
      allNotes.forEach((note) => {
        if (note)
          if (
            note.willRemind &&
            getCurrentDate() === note.date &&
            isTimeAhead(note.time)
          ) {
            const interval = setInterval(() => {
              if (getCurrentTime() === note.time) {
                alert(`Notification!!!!`);
                clearInterval(interval);
              }
            }, 10000);
            console.log(`${note.id} will remind`);
          }
      });
    }
  }, [allNotes]);

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
