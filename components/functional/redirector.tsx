import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";

const Redirector = () => {
  const { login } = useAppSelector(({ userSlice: toolkit }) => {
    return {
      login: toolkit.login,
    };
  });

  const router = useRouter();

  useEffect(() => {
    if (login === "") {
      alert("Log in first!");
      router.push("/logIn");
    }
  }, []);

  return <></>;
};

export default Redirector;
