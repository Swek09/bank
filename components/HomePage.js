import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require('../assets/icons/Account.png')} style={styles.leftIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.smallGrayText}>2021.03.04</Text>
          <Text style={styles.bigText}>Hi, John</Text>
        </View>
        <View style={styles.rightIconsContainer}>
          <Image source={require('../assets/icons/Notification.png')} />
          <Image source={require('../assets/icons/Help.png')} style={styles.helpIcon} />
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>¥210.430</Text>
          <View style={styles.cardNumbers}>
            <Text style={styles.cardNum}>1234 5678 9012 3456</Text>
            <Text style={styles.cardDate}>06/24</Text>
          </View>
        </View>
        <View style={styles.cardTransfer}>
          <View style={styles.transfer}>
            <View style={styles.transferBlock}>
              <Image source={require('../assets/icons/arrow-up.png')} style={styles.arrowIcon} />
              <View>
                <Text style={styles.transferText}>Expense</Text>
                <Text style={styles.transferText}>¥4,264</Text>
              </View>
            </View>
            <View style={styles.transferBlock}>
              <Image source={require('../assets/icons/arrow-down.png')} style={styles.arrowIcon} />
              <View>
                <Text style={styles.transferText}>Income</Text>
                <Text style={styles.transferText}>¥3,897</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cryptoContainer}>
          <View style={styles.crypto}>
            <Image source={require('../assets/crypto/btc.png')} style={styles.cryptoIcon} />
            <Text style={styles.cryptoText}>USD</Text>
            <Text style={styles.cryptoText}>¥7</Text>
          </View>
          <View style={styles.crypto}>
            <Image source={require('../assets/crypto/solana.png')} style={styles.cryptoIcon} />
            <Text style={styles.cryptoText}>EUR</Text>
            <Text style={styles.cryptoText}>¥8</Text>
          </View>
        </View>
        <View style={styles.cryptoContainer}>
          <View style={styles.crypto}>
            <Image source={require('../assets/crypto/btc.png')} style={styles.cryptoIcon} />
            <Text style={styles.cryptoText}>Gold</Text>
            <Text style={styles.cryptoText}>¥16.856</Text>
          </View>
          <View style={styles.crypto}>
            <Image source={require('../assets/crypto/solana.png')} style={styles.cryptoIcon} />
            <Text style={styles.cryptoText}>Silver</Text>
            <Text style={styles.cryptoText}>¥213</Text>
          </View>
        </View>
        <View style={styles.cryptoContainer}>
          <View style={styles.crypto}>
            <Image source={require('../assets/crypto/btc.png')} style={styles.cryptoIcon} />
            <Text style={styles.cryptoText}>BTC</Text>
            <Text style={styles.cryptoText}>¥510.092</Text>
          </View>
          <View style={styles.crypto}>
            <Image source={require('../assets/crypto/solana.png')} style={styles.cryptoIcon} />
            <Text style={styles.cryptoText}>SOL</Text>
            <Text style={styles.cryptoText}>¥1.180</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
  cardContainer: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'black',
    width: '80%',
    height: '30%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cardNumbers: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    color: 'white',
    fontSize: 32,
    marginBottom: 10,
  },
  cardNum: {
    color: 'white',
    fontSize: 16,
  },
  cardDate: {
    color: 'white',
    fontSize: 16,
  },
  cardTransfer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  transfer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  transferBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    paddingHorizontal: '8%',
    borderRadius: 8,
  },
  arrowIcon: {
    width: 28,
    height: 28,
    marginRight: 5,
  },
  transferText: {
    color: 'black',
    fontSize: 16,
  },
  cryptoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    padding: 15,
    paddingHorizontal: '8%',
    paddingTop: 5,
    borderRadius: 8,
  },
  crypto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cryptoIcon: {
    width: 24,
    height: 24,
  },
  cryptoText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
  },
});

export default HomePage;
