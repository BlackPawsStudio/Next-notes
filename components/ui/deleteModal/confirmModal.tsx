import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setModal } from "../../../redux/slices/modalSlice";
import { Button, Buttons, Container, Modal, Text } from "./confirmModal.style";

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
