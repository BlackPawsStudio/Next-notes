import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import Redirector from "../components/functional/redirector";
import {
  Container,
  Content,
  Title,
} from "../components/pagesStyles/preferences.style";
import MediaSetup from "../components/preferences/mediaSetup";
import TextSetup from "../components/preferences/textSetup";
import { useAppSelector } from "../redux/hooks";

const PreferencesPage = () => {
  const { backColor, foreColor, title, text, sound } = useAppSelector(
    ({ prefsSlice: toolkit }) => {
      return {
        backColor: toolkit.backColor,
        foreColor: toolkit.foreColor,
        title: toolkit.title,
        text: toolkit.text,
        sound: toolkit.sound
      };
    }
  );

  const { id } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      id: toolkit.id
    }
  })

  const updatePref = async () => {
        await fetch(`https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${id}/prefs.json`, {
          method: "PUT",
          body: JSON.stringify({
            backColor: backColor,
            foreColor: foreColor,
            title: title,
            text: text,
            sound: sound,
          }),
        });
  }

  useEffect(() => {
    return () => {
      updatePref()
    }
  })

  return (
    <Container>
      <Redirector />
      <Title>Set up your default note</Title>
      <Content onMouseLeave={() => {}} backColor={backColor}>
        <MediaSetup foreColor={foreColor} sound={sound} />
        <TextSetup
          foreColor={foreColor}
          title={title}
          text={text}
        />
      </Content>
    </Container>
  );
};

export default PreferencesPage;
