import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAlert, setModal } from "../../redux/slices/modalSlice";
import { updateAll } from "../../redux/slices/prefsSlice";
import { updateLogin } from "../../redux/slices/userSlice";

const Redirector = () => {
  const { id, login } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      id: toolkit.id,
      login: toolkit.login,
    };
  });

  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(router.locales);
    
    const checkLogged = async () => {
      if (login === "") {
        const userLogin = localStorage.getItem("next-notes-login");
        const userPass = localStorage.getItem("next-notes-pass");
        if (userLogin && userPass) {
          const response = await fetch(
            `/api/users?login=${userLogin}&password=${userPass}`
          );
          const result = await response.json();
          if (result.message) {
            dispatch(setModal("alert"))
            alert(result.message);
          } else {
            dispatch(updateLogin({ id: result.id, login: result.login }));
            dispatch(updateAll(result.prefs));
            router.push("/notes");
          }
        } else {
          dispatch(setAlert("Log in first"))
          // alert("Log in first!");
          router.push("/logIn");
        }
      }
    }
    checkLogged();
  }, []);
  return <></>;
};

export default Redirector;
