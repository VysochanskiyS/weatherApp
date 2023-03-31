import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { RootStackParamList, ScreenEnum } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenEnum.HOME}>
        <Stack.Screen name={ScreenEnum.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
