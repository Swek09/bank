import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/icons/coffee.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Главная</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Payments')}>
        <Image source={require('../assets/icons/arrow-left-right.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Платежи</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/icons/user-check.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Профиль</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
        <Image source={require('../assets/icons/clock-circle.png')} style={styles.navIcon} />
        <Text style={styles.navText}>История</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('More')}>
        <Image source={require('../assets/icons/lock-password.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Еще</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#007bff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 75,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4, 
  },
});

export default NavBar;
