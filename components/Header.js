import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/icons/Account.png')} style={styles.leftIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.smallGrayText}>2021.03.04</Text>
          <Text style={styles.bigText}>Hi, John</Text>
        </View>
        <View style={styles.rightIconsContainer}>
          <Image source={require('../assets/icons/notification.png')} />
          <Image source={require('../assets/icons/qr-code.png')} style={styles.helpIcon} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        paddingTop: 45,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    leftIcon: {
        width: 24,
        height: 24,
    },
    rightIconsContainer: {
        flexDirection: 'row',
    },
    helpIcon: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    smallGrayText: {
        fontSize: 12,
        color: 'gray',
    },
        bigText: {
        fontSize: 16,
    },
});

export default NavBar;
