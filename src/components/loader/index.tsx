import { Colors } from '@utils';
import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface IUiLoaderLabel {
  label: string;
  withPreloader?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export const UiLoaderLabel = ({
  label,
  withPreloader,
  containerStyle,
}: IUiLoaderLabel) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {withPreloader && <ActivityIndicator color={Colors.MEDIUM_GREY} />}
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
