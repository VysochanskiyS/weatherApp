import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, screenWidth } from '../../utils';

export const ProPlan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Buy History plan on OpenWeather API to show weather more than for 5 days
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 22,
    color: Colors.BLACK,
    fontWeight: 'bold',
  },
});
