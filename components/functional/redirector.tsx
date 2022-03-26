import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setAlert, setModal } from '../../redux/slices/modalSlice';
import { updateAll } from '../../redux/slices/prefsSlice';
import { updateLogin } from '../../redux/slices/userSlice';

const Redirector = () => {
  const { login } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      login: toolkit.login,
    };
  });

  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang,
    };
  });

  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkLogged = async () => {
      if (login === '') {
        const userLogin = localStorage.getItem('next-notes-login');
        const userPass = localStorage.getItem('next-notes-pass');
        if (userLogin && userPass) {
          const response = await fetch(`/api/users?login=${userLogin}&password=${userPass}`);
          const result = await response.json();
          if (result.message) {
            dispatch(setAlert(result.message));
          } else {
            dispatch(updateLogin({ id: result.id, login: result.login }));
            dispatch(updateAll(result.prefs));
            router.push('/notes');
          }
        } else {
          if (router.pathname != '/') {
            dispatch(setAlert(lang === "en" ? "Log in first" : "Сперва войдите"))
            router.push("/logIn");
          }
        }
      }
    };
    checkLogged();
  }, []);
  return <></>;
};

export default Redirector;
