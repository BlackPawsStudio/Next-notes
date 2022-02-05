import { useState } from "react";
import { Container, Blur, BackgroundText } from "./background.styled";

const Background = () => {
  const defaultText = "<Hello world! />";
  const [text, setText] = useState(defaultText);
  const [isDec, setIsDec] = useState(true);

  setTimeout(() => {
    if (isDec) {
      const tempArr = text.split("");
      tempArr.pop();
      setText(tempArr.join(""));
      if (!text) setIsDec(false);
    } else {
      defaultText[text.length] ? setText(text + defaultText[text.length]) : "";
      if (defaultText === text) setIsDec(true);
    }
  }, 700);

  return (
    <Container>
      <Blur>
        <BackgroundText>{text + "_"}</BackgroundText>
      </Blur>
    </Container>
  );
};

export default Background;
