import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setModal } from "../../../../redux/slices/modalSlice";
import { Container, Modal, Text } from "../modal.style";
import { Button } from "./infoModal.style";

const InfoModal = () => {
  const { state, message } = useAppSelector(({ modalSlice: toolkit }) => {
    return {
      state: toolkit.state,
      message: toolkit.message,
    };
  });

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    
  }, [])

  return (
    <>
      {state === "alert" ? (
        <Container>
          <Modal>
            <Text>{message}</Text>
            <Button
              onClick={() => {
                dispatch(setModal("free"));
              }}
            >
              OK
            </Button>
          </Modal>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default InfoModal;
