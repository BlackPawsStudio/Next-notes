import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setEditting } from "../../../../redux/slices/noteSlice";
import { Button } from "./editButton.style";

const EditButton = ({ id }) => {
  const { isEditting } = useAppSelector(({ noteSlice: toolkit }) => {
    return {
      isEditting: toolkit.isEditting,
    };
  });
  const dispatch = useAppDispatch();

  const onClick = async () => {
    dispatch(setEditting());
    if (isEditting) {
    }
  };

  return <Button editting={isEditting} onClick={onClick}></Button>;
};

export default EditButton;
