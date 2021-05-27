import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Home from '../container/screens/Home';
import Edit from '../container/screens/Edit';
import Delete from '../container/screens/Delete';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          // component={FeedbackDrawer}
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Edit"
          // component={FeedbackDrawer}
          component={Edit}
        />
        <Stack.Screen name="Delete" component={Delete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
