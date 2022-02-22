import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLang } from "../../../redux/slices/languageSlice";
import { Switch, SwitchThumb } from "./langSwitch.style";

const LangSwitch = () => {
  const [checked, setChecked] = useState(false);
  
  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang
    }
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    setChecked(lang === "en" ? false : true)
  }, [lang])

  return (
    <Switch onClick={() => { dispatch(setLang(checked ? "en" : "ru")) }}>
      <SwitchThumb checked={checked} >{lang.toUpperCase()}</SwitchThumb>
    </Switch>
  );
};

export default LangSwitch;
