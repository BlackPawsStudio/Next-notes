import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTarget } from "../../redux/slices/saverSlice";

const Saver = () => {
  const { backColor, foreColor, title, text, sound } = useAppSelector(
    ({ prefsSlice: toolkit }) => {
      return {
        backColor: toolkit.backColor,
        foreColor: toolkit.foreColor,
        title: toolkit.title,
        text: toolkit.text,
        sound: toolkit.sound,
      };
    }
  );

  const { id } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      id: toolkit.id,
    };
  });

  const { userId } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      userId: toolkit.id,
    };
  });

  const data = useAppSelector(({ noteSlice: toolkit }) => {
    return {
      title: toolkit.title,
      backColor: toolkit.backColor,
      foreColor: toolkit.foreColor,
      text: toolkit.text,
      date: toolkit.date,
      time: toolkit.time,
      willRemind: toolkit.willRemind,
      isEditting: toolkit.isEditting,
      id: toolkit.id,
    };
  });

  const { target } = useAppSelector(({ saverSlice: toolkit }) => {
    return {
      target: toolkit.target,
    };
  });

  const dispatch = useAppDispatch()

  const updatePref = async () => {
    await fetch(`/api/pref`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        backColor: backColor,
        foreColor: foreColor,
        title: title,
        text: text,
        sound: sound,
      }),
    });
    dispatch(setTarget("none"));
  };

  const updateNote = async () => {
    await fetch(`/api/notes?user=${userId}&note=${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    dispatch(setTarget("none"));
  };

  useEffect(() => {
    if (target === "note") {
      updateNote();
    }
    if (target === "prefs") {
      updatePref();
    }
  }, [target]);

  return <></>;
};

export default Saver;
