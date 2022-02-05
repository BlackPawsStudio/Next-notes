import { useRouter } from "next/router";
import {
  Container,
  ErrorButton,
  ErrorDescription,
  ErrorMessage,
} from "../components/pagesStyles/404.style";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <Container>
      <ErrorMessage>404</ErrorMessage>
      <ErrorDescription>Your princess is in another castle :)</ErrorDescription>
      <ErrorButton
        onClick={() => {
          router.back();
        }}
      >
        Take me back
      </ErrorButton>
    </Container>
  );
};

export default NotFoundPage;
