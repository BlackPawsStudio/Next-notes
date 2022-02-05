import { Container, Title, Wrapper } from "../components/pagesStyles/homePage.style";
import { TextContainer } from "../components/ui/note/textField/textField.style";

const HomePage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Welcome to Next Notes!</Title>
        <TextContainer
          color = "#111"
          disabled={true}
          defaultValue={`welcome message`}
        />
      </Container>
    </Wrapper>
  );
};

export default HomePage;
