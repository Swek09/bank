import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './components/NavBar';
import Header from './components/Header';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './pages/HomePage';
import PaymentsPage from './pages/PaymentsPage';
import SavingsPage from './pages/SavingsPage';
import HistoryPage from './pages/HistoryPage';
import MorePage from './pages/MorePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Header />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payments"
          component={PaymentsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Savings"
          component={SavingsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History"
          component={HistoryPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="More"
          component={MorePage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
        <View style={styles.navigation}>
          <NavBar />
        </View>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    justifyContent: 'flex-end',
  },
});
