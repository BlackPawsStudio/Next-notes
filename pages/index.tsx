import { Container, Title, Wrapper } from '../components/pagesStyles/homePage.style';
import { TextContainer } from '../components/pagesStyles/index.style';
import ReactMarkdown from 'react-markdown';
import { useAppSelector } from '../redux/hooks';
import Redirector from '../components/functional/redirector';

const HomePage = () => {
  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang,
    };
  });

  return (
    <Wrapper>
      <Container>
        <Redirector />
        <Title>{lang === 'en' ? 'Welcome to Next Notes!' : 'Приветствуем в Next notes!'}</Title>
        <TextContainer>
          <ReactMarkdown>
            {lang === 'en'
              ? `
## Welcome to Next Notes!

This is an application for creating notes, that you can set up all by your will!

Create your account and start creating new notes.

You can change:
- note title;
- note text itself;
- background and text color;
- and you can turn on reminder, that will alert in the specified date and time.

Notes text can be written using [markdown](https://ru.wikipedia.org/wiki/Markdown), which grants you almost unlimited note-taking possibilities!

Good luck and pleasant use!
`
              : `
## Добро пожаловать в Next Notes! 

Это приложение для создания записок, которые можно настроить полностью по своему желанию!

Создайте свой аккаунт, после чего вы сможете создавать новые записки. 

Вы можете изменить:
- заголовок;
- сам текст записки;
- цвет фона и текста;
- а также включить уведомление, которое сработает в установленный день и время.

Текст записок можно писать, используя разметку [markdown](https://ru.wikipedia.org/wiki/Markdown), что позволяет получить почти безграничные возможности создания записок!

Удачи и приятного пользования!
`}
          </ReactMarkdown>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
