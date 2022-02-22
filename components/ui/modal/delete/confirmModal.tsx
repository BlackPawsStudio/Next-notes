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

  const dispatch = useAppDispatch();

  return (
    <>
      {state === "show" ? (
        <Container>
          <Modal>
            <Text>Are you sure?</Text>
            <Buttons>
              <Button
                onClick={() => {
                  dispatch(setModal("yes"));
                }}
                yes
              >
                Yes
              </Button>
              <Button
                onClick={() => {
                  dispatch(setModal("no"));
                }}
              >
                No
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
