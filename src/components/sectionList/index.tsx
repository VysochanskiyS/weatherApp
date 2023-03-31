import React, { useCallback, useRef, useMemo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  Colors,
  hasNumberInString,
  screenHeight,
  screenWidth,
  titleOfWeather,
} from '../../utils';
import { useSelector } from 'react-redux';
import { getSelectedDaySelector } from '../../redux/selectors';
import { ISection } from '../../../types/bottomSheet.ts';
import BottomSheet, { BottomSheetSectionList } from '@gorhom/bottom-sheet';

export const SectionList = () => {
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const { weatherList } = useSelector(getSelectedDaySelector);

  const sections = useMemo(
    () =>
      weatherList.map((partOfDay, i, array) => ({
        title: titleOfWeather(array, partOfDay, i),
        data: weatherList
          .filter(item => item.dt_txt.includes(partOfDay.dt_txt))
          .map(partDay => (
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>`temp: ${partDay.main.temp}°C` </Text>
              <Text>`time: {partDay.dt_txt.split(' ')[1]} </Text>
            </View>
          )),
      })),
    [weatherList],
  );
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // callbacks
  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  const renderSectionHeader = useCallback(
    ({ section }: { section: ISection }) => {
      return !hasNumberInString(section.title) ? (
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.textHeader}>{section.title}</Text>
        </View>
      ) : null;
    },
    [],
  );

  const renderItem = useCallback(
    ({ item }: { item: string }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );
  return (
    <>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => handleSnapPress(2)}>
        <Text>Open Section List</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'red',
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  sectionHeaderContainer: {
    backgroundColor: Colors.DEEP_GREY,
    padding: 6,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  bottomButton: {
    width: screenWidth,
    alignItems: 'center',
  },
  textHeader: {
    color: Colors.WHITE,
    fontSize: 16,
  },
  modalHeader: { position: 'absolute', right: 20, top: 5 },
  modalHeaderText: { fontSize: 16, fontWeight: 'bold' },
});
