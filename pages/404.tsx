import { useRouter } from "next/router";
import {
  Container,
  ErrorButton,
  ErrorDescription,
  ErrorMessage,
} from "../components/pagesStyles/404.style";
import { useAppSelector } from "../redux/hooks";

const NotFoundPage = () => {
  const router = useRouter();

   const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
     return {
       lang: toolkit.lang,
     };
   });

  return (
    <Container>
      <ErrorMessage>404</ErrorMessage>
      <ErrorDescription>{lang === "en" ? "Your princess is in another castle :)" : "Кажется вы не туда попали)"}</ErrorDescription>
      <ErrorButton
        onClick={() => {
          router.back();
        }}
      >
        {lang === "en" ? "Take me back" : "Назад"}
      </ErrorButton>
    </Container>
  );
};

export default NotFoundPage;
