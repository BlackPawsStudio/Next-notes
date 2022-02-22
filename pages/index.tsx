import { Container, Title, Wrapper } from "../components/pagesStyles/homePage.style";
import { TextContainer } from "../components/pagesStyles/index.style";
import ReactMarkdown from "react-markdown";
import { useAppSelector } from "../redux/hooks";

const HomePage = () => {
  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang
    }
  })

  return (
    <Wrapper>
      <Container>
        <Title>{lang === "en" ? "Welcome to Next Notes!" : "Приветствуем в Next notes!"}</Title>
        <TextContainer>
          <ReactMarkdown>{lang === "en" ? `# Welcome to Next Notes!` : `# Добро пожаловать в некст нотес`}</ReactMarkdown>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
