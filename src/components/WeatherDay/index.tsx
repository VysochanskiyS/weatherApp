import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedDaySelector } from '../../redux/selectors';
import { fetchWeatherByDay } from '../../redux/actions';

let defaultUrl = 'https://openweathermap.org/img/wn/';

interface IProps {
  selectedDay: string;
}
export const WeatherDay = ({ selectedDay }: IProps) => {
  const dispatch = useDispatch();
  const { weatherDay } = useSelector(getSelectedDaySelector);

  useEffect(() => {
    dispatch(fetchWeatherByDay(selectedDay));
  }, [dispatch, selectedDay]);

  return (
    <View style={styles.containerSelectedDate}>
      {Object.keys(weatherDay).length ? (
        <>
          <Text>{weatherDay.weather[0].description}</Text>
          <Text>temperature: {weatherDay.main.temp}</Text>
          <Text> feels: {weatherDay.main.feels_like}</Text>
          <Image
            style={styles.image}
            source={{
              uri: `${defaultUrl}${weatherDay.weather[0].icon}.png`,
            }}
          />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerSelectedDate: {
    backgroundColor: 'red',
    margin: 10,
  },
  image: { width: 50, height: 50 },
});
