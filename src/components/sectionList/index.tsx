import React, { useCallback, useRef, useMemo, useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { daysOfWeek, screenHeight, screenWidth } from '../../utils';
import { useSelector } from 'react-redux';
import { getSelectedDaySelector } from '../../redux/selectors';
import { IListweather } from '../../../types/weather';

export const SectionList = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [priority, setPriority] = useState<any>();

  // variables
  const { weatherList } = useSelector(getSelectedDaySelector);

  const sections = useMemo(
    () =>
      weatherList.map((partOfDay: IListweather, i, array) => ({
        title:
          array[i - 1]?.dt_txt.split(' ')[0] === partOfDay.dt_txt.split(' ')[0]
            ? partOfDay.dt_txt.split(' ')[1]
            : daysOfWeek[new Date(partOfDay.dt_txt).getDay()],
        data: weatherList
          .filter((item: IListweather) =>
            item.dt_txt.includes(partOfDay.dt_txt),
          )
          .map((partDay: IListweather) => `temp: ${partDay.main.temp}`),
      })),
    [weatherList],
  );
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // callbacks
  const handleSheetChange = useCallback(
    (index: number) => {
      setPriority(+snapPoints[index].split('%')[0]);
    },
    [snapPoints],
  );
  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderSectionHeader = useCallback(
    ({ section }) => (
      <View style={styles.sectionHeaderContainer}>
        <Text>{section.title}</Text>
      </View>
    ),
    [],
  );
  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );
  return (
    <View
      style={styles.container}
      pointerEvents={priority > 50 ? 'auto' : 'auto'}>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => handleSnapPress(2)}>
        <Text>Open Section List</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        overDragResistanceFactor={2}>
        <BottomSheetSectionList
          sections={sections}
          keyExtractor={i => i}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
        <TouchableOpacity onPress={handleClosePress} style={styles.modalHeader}>
          <Text style={styles.modalHeaderText}>close</Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    width: screenWidth,
    height: screenHeight / 1.3,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  sectionHeaderContainer: {
    backgroundColor: 'white',
    padding: 6,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0,
  },
  modalHeader: { position: 'absolute', right: 20, top: 5 },
  modalHeaderText: { fontSize: 16, fontWeight: 'bold' },
});
