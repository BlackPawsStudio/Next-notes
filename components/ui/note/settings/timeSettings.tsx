import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  setDate,
  setReminder,
  setTime,
} from "../../../../redux/slices/noteSlice";
import { InputLabel, InputLabelText } from "./settings.style";
import {
  Date,
  Time,
  TimeInput,
  Reminder,
  ReminderCheck,
  ReminderSetup,
} from "./timeSettings.style";

const TimeSettings = () => {
  const { foreColor, date, time, willRemind } = useAppSelector(
    ({ noteSlice: toolkit }) => {
      return {
        foreColor: toolkit.foreColor,
        date: toolkit.date,
        time: toolkit.time,
        willRemind: toolkit.willRemind,
      };
    }
  );

  const { lang } = useAppSelector(({ languageSlice: toolkit }) => {
    return {
      lang: toolkit.lang,
    };
  });

  const dispatch = useAppDispatch();

  const checkTime = ({ target }, isHour) => {
    if (target.value.length > 2) {
      target.value = target.value[0] + target.value[1];
    }
    if (+target.value > 59) {
      target.value = 59;
    }
    if (isHour && +target.value > 23) {
      target.value = 23;
    }

    dispatch(
      setTime({
        hour: isHour,
        value: target.value,
      })
    );
  };

  const correctTime = ({ target }) => {
    if (target.value.length === 1) {
      target.value = `0${target.value}`;
    }
    if (target.value.length === 0) {
      target.value = "00";
    }
  };

  return (
    <InputLabel isColor={false}>
      <ReminderSetup>
        <InputLabelText>{lang === "en" ? "Date" : "Дата"}</InputLabelText>
        <Date
          type="date"
          defaultValue={date}
          color={foreColor}
          onChange={({ target }) => {
            dispatch(setDate(target.value));
          }}
        />
      </ReminderSetup>
      <ReminderSetup>
        <InputLabelText>{lang === "en" ? "Time" : "Время"}</InputLabelText>
        <Time>
          <TimeInput
            type="number"
            color={foreColor}
            defaultValue={time.split(":")[0]}
            onChange={(e) => {
              checkTime(e, true);
            }}
            onBlur={correctTime}
          />
          :
          <TimeInput
            type="number"
            color={foreColor}
            defaultValue={time.split(":")[1]}
            onChange={(e) => {
              checkTime(e, false);
            }}
            onBlur={correctTime}
          />
        </Time>
      </ReminderSetup>
      <Reminder>
        <ReminderCheck
          type="checkbox"
          onChange={() => {
            dispatch(setReminder());
          }}
          checked={willRemind}
        />
        {lang === "en" ? "Set reminder?" : "Вкл. уведомление?"}
      </Reminder>
    </InputLabel>
  );
};

export default TimeSettings;
