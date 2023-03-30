import { StyleSheet } from 'react-native';
import React from 'react';
import { Calendar, DateData } from 'react-native-calendars';

type IProps = {
  selected: string;
  setSelected: (day: string) => void;
};

export const CustomCalendar = ({ selected, setSelected }: IProps) => {
  const handleSelectDay = (day: DateData) => {
    console.log('data', day.dateString);
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
