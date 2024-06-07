import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

const PaymentPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sendContainer}>
          <Text style={styles.sendTitle}>Send to</Text>
          <View style={styles.sendPerson}>
            <View style={styles.personContainer}>
              <Image source={require('../assets/icons/Add-Icon.png')} />
              <Text style={styles.personText}>Add</Text>
            </View>
            <View style={styles.personContainer}>
              <Image source={require('../assets/icons/Yamilet.png')} />
              <Text style={styles.personText}>Yamilet</Text>
            </View>
            <View style={styles.personContainer}>
              <Image source={require('../assets/icons/Alexa.png')} />
              <Text style={styles.personText}>Alexa</Text>
            </View>
            <View style={styles.personContainer}>
              <Image source={require('../assets/icons/Yakab.png')} />
              <Text style={styles.personText}>Yakab</Text>
            </View>
            <View style={styles.personContainer}>
              <Image source={require('../assets/icons/Krishna.png')} />
              <Text style={styles.personText}>Krishna</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/icons/bill.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>bills</Text>
          </TouchableOpacity>
          <View style={{ width: 15 }} />
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/icons/auto-payment.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>auto pay</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transferContainer}>
          <Text style={styles.transferTitle}>Transfer</Text>
          <View style={styles.transferOptions}>
            <View style={styles.optionContainer}>
              <Image source={require('../assets/icons/Connection.png')} />
              <Text style={styles.optionText}>Transfer Accounts</Text>
            </View>
            <View style={styles.optionContainer}>
              <Image source={require('../assets/icons/mobile.png')} />
              <Text style={styles.optionText}>By Phone Number</Text>
            </View>
            <View style={styles.optionContainer}>
              <Image source={require('../assets/icons/credit-card.png')} />
              <Text style={styles.optionText}>By Card Number</Text>
            </View>
            <View style={styles.optionContainer}>
              <Image source={require('../assets/icons/bank.png')} />
              <Text style={styles.optionText}>By Bank Account</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  sendContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    padding: 15,
    paddingHorizontal: '5%',
    marginHorizontal: 15,
    borderRadius: 8,
  },
  sendPerson: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 15,
  },
  personContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  personText: {
    marginTop: 5,
    textAlign: 'center',
  },
  sendTitle: {
    fontSize: 20,
  },
  transferContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    padding: 15,
    paddingHorizontal: '5%',
    marginHorizontal: 15,
    borderRadius: 8,
  },
  transferOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 15,
  },
  optionContainer: {
    alignItems: 'center',
    width: '20%',
    marginBottom: 10,
  },
  optionText: {
    marginTop: 5,
    textAlign: 'center',
  },
  transferTitle: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default PaymentPage;
