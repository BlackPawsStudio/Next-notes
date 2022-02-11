import { useAppDispatch } from "../../../redux/hooks";
import { updateSound } from "../../../redux/slices/prefsSlice";
import { Container, Select } from "./soundSelect.style";

const SoundSelect = ({ color, sound }) => {
  const dispatch = useAppDispatch();

  return (
    <Container color={color}>
      Select notification sound
      <Select
        defaultValue={sound}
        onChange={(e) => {
          const audio = new Audio(`/sounds/${e.target.value}.mp3`);
          audio.play();
          dispatch(updateSound(e.target.value));
          setTimeout(() => {
            audio.pause();
          }, 3000);
        }}
      >
        <option value={1}>Ding-dong</option>
        <option value={2}>Xilophone</option>
        <option value={3}>Chime</option>
        <option value={4}>Tick-tack</option>
        <option value={5}>Echo</option>
        <option value={6}>IO</option>
      </Select>
    </Container>
  );
};

export default SoundSelect