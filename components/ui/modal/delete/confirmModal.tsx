import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setModal } from "../../../../redux/slices/modalSlice";
import { Button, Buttons } from "./confirmModal.style";
import { Container, Modal, Text } from "../modal.style";

const ConfirmModal = () => {
  const { state } = useAppSelector(({ modalSlice: toolkit }) => {
    return {
      state: toolkit.state,
    };
  });

  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang,
    };
  });

  const dispatch = useAppDispatch();

  return (
    <>
      {state === "show" ? (
        <Container>
          <Modal>
            <Text>{lang === "en" ? "Are you sure?" : "Вы уверены?"}</Text>
            <Buttons>
              <Button
                onClick={() => {
                  dispatch(setModal(lang === "en" ? "Yes" : "Да"));
                }}
                yes
              >
                {lang === "en" ? "Yes" : "Да"}
              </Button>
              <Button
                onClick={() => {
                  dispatch(setModal(lang === "en" ? "No" : "Нет"));
                }}
              >
                {lang === "en" ? "No" : "Нет"}
              </Button>
            </Buttons>
          </Modal>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConfirmModal;
