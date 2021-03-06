import { useEffect, useState } from 'react';
import Note from '../../components/ui/note/note/note';
import NewNote from '../../components/ui/newNote/newNote';
import {
  Container,
  LoadingMessage,
  NoteContainer,
  Title,
} from '../../components/pagesStyles/allNotes.style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Redirector from '../../components/functional/redirector';
import { setNotifications } from '../../redux/slices/notificationSlice';
import { SkewLoader } from 'react-spinners';

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

  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang,
    };
  });

  useEffect(() => {
    const getAllNotes = async () => {
      const response = await fetch(`/api/notes/?user=${id}`);
      const result = await response.json();
      const notes: Array<NoteType> = Object.values(result);
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
                title: el.title,
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
      <Title>{lang === 'en' ? 'Your all notes' : 'Все ваши записки'}</Title>
      <NoteContainer>
        {allNotes.length ? (
          <>
            {typeof allNotes === 'string'
              ? allNotes
              : allNotes.map((el) => (el ? <Note key={el.id} id={el.id} note={el}></Note> : ''))}
            <NewNote oldData={allNotes} />
          </>
        ) : (
          <LoadingMessage>
            <>Loading, please wait...</>
            <SkewLoader size={30} />
          </LoadingMessage>
        )}
      </NoteContainer>
    </Container>
  );
};

export default AllNotesPage;
