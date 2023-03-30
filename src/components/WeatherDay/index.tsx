import {View, Text, StyleSheet, Image, ScrollView, ScrollResponderEvent} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedDaySelector } from '../../redux/selectors';
import {IBaseWeatherInfo, IListweather} from '../../../types/weather';
import {Colors, defaultUrl, formattedTime, formatTime, screenWidth} from '../../utils';
import { ProPlan } from '../ProPlan';
import { fetchWeather5Days, fetchWeatherDay } from '../../redux/actions';

interface IProps {
  selectedDay: string;
}

export const WeatherDay = ({ selectedDay }: IProps) => {
  const dispatch = useDispatch();
  const { weatherDay, weatherList } = useSelector(getSelectedDaySelector);

  useEffect(() => {
    console.log('second rerender');
    dispatch(fetchWeather5Days());
  }, [dispatch]);

  useEffect(() => {
    console.log('first rerender');
    dispatch(fetchWeatherDay(selectedDay));
  }, [dispatch, selectedDay, weatherList]);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({y: 0});
    }
  }, [weatherDay])



  return (
    <View  style={styles.containerSelectedDate}>
       <ScrollView
           ref={scrollViewRef}
           horizontal
           showsHorizontalScrollIndicator={false}
       >
        {weatherDay.length ? (
            weatherDay.map((partOfDay: IBaseWeatherInfo) => {
            return (
              <View style={styles.cardOfPartDay} key={partOfDay.dt}>
                <View style={[styles.row, styles.titleBlock]}>
                  <Text style={styles.textTime}>
                    {formatTime(partOfDay.dt)}
                  </Text>
                  <Text style={styles.weatherText}>
                    {partOfDay.weather[0].description}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text>temp:</Text>
                  <Text style={styles.textDesc}>{partOfDay.temp}°C</Text>
                </View>
                <View style={styles.row}>
                  <Text>feels like: </Text>
                  <Text style={styles.textDesc}>
                    {partOfDay.feels_like}°C
                  </Text>
                </View>
                <View style={styles.row}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `${defaultUrl}${partOfDay.weather[0].icon}.png`,
                    }}
                  />
                </View>
              </View>
            );
          })
        ) : (
          <ProPlan />
        )}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  containerSelectedDate: {
    margin: 10,
    height: 150,
  },
  cardOfPartDay: {
    width: screenWidth / 2,
    marginRight: 10,
    backgroundColor: Colors.MEDIUM_GREY,
    borderRadius: 10,
    padding: 10,
  },
  image: { width: 50, height: 50 },
  textDesc: { fontSize: 16, color: Colors.BLACK, lineHeight: 22 },
  textTime: {
    fontSize: 24,
    color: Colors.DEEP_GREY,
  },
  titleText: { fontSize: 16 },
  titleBlock: {
    borderBottomColor: Colors.DEEP_GREY,
    borderBottomWidth: 1,
    paddingBottom: 2,
    marginBottom: 4,
  },
  weatherText: {
    fontSize: 13,
    color: Colors.BLACK,
    marginRight: 4,
    fontFamily: 'Cochin',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
  },
});
