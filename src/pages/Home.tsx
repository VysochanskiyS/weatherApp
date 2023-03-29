import { View } from 'react-native';
import React, { useState } from 'react';
import { CustomCalendar } from '../components/calendar';
import { WeatherDay } from '../components/WeatherDay';
import { SectionList } from '../components/sectionList';

export const Home = () => {
  const [selected, setSelected] = useState<string>('2023-01-01');

  console.log('selected', selected);
  return (
    <View>
      <CustomCalendar selected={selected} setSelected={setSelected} />
      <WeatherDay selectedDay={selected} />
      <SectionList />
    </View>
  );
};

// const styles = StyleSheet.create({
//   scrollStyle: {
//     padding: 20,
//     backgroundColor: 'red',
//     height: 100,
//   },
// });
