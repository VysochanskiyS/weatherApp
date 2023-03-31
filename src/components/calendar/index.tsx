import React from 'react';
import { Calendar, DateData } from 'react-native-calendars';

type IProps = {
  selected: string;
  setSelected: (day: string) => void;
};

export const CustomCalendar = ({ selected, setSelected }: IProps) => {
  const handleSelectDay = (day: DateData) => {
    setSelected(day.dateString);
  };

  return (
    <Calendar
      onDayPress={handleSelectDay}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
    />
  );
};
