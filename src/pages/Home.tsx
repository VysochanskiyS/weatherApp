import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { CustomCalendar } from '../components/calendar';
import { WeatherDay } from '../components/WeatherDay';
import { screenHeight } from '../utils';

export const Home = () => {
  const [selected, setSelected] = useState<string>(
    new Date().toISOString().split('T')[0],
  );

  return (
    <View style={styles.container}>
      <CustomCalendar selected={selected} setSelected={setSelected} />
      <WeatherDay selectedDay={selected} />
      {/*<SectionList />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: screenHeight },
});
