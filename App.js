import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import * as Constants from 'expo-constants';
import AppHeader from './components/AppHeader';
import * as WebBrowser from 'expo-web-browser';

export default class HomeScreen extends React.Component {
  render() {
    this.goToLink = (url) => {
      WebBrowser.openBrowserAsync(url);
    };
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <AppHeader title="ALL MY APPS" />
               <Text style={styles.title}>TOP APPS OF ME</Text>
              <TouchableOpacity
                onPress={() => {
                  this.goToLink(
                    'https://snack.expo.io/@jr.abdulwahab/latlongconverter'
                  );
                }}
                style={styles.button3}>
                <Text style={styles.buttonText}>
                  Lat&Long to Address Converter
                </Text>
              </TouchableOpacity>
              <></>
              <TouchableOpacity
                onPress={() => {
                  this.goToLink(
                    'https://snack.expo.io/@jr.abdulwahab/n_e_w_s_p_a_p_e_rapi'
                  );
                }}
                style={styles.button2}>
                <Text style={styles.buttonText}>Newspaper</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.goToLink(
                    'https://snack.expo.io/@jr.abdulwahab/dictionary-app'
                  );
                }}
                style={styles.button2}>
                <Text style={styles.buttonText}>Dictionary</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.goToLink(
                    'https://snack.expo.io/@jr.abdulwahab/qr-code-scanner'
                  );
                }}
                style={styles.button2}>
                <Text style={styles.buttonText}>QR Code Scanner</Text>
              </TouchableOpacity>
              <Text style={{fontStyle:'bold'}}>
                ________________________________________________________
              </Text>
                   <Text style={{fontStyle:'bold'}}>
                ________________________________________________________
              </Text>
              <TouchableOpacity
              style={styles.button2}
                onPress={() => {
                  this.goToLink(
                    'https://snack.expo.io/@jr.abdulwahab/weather-app'
                  );
                }}>
                
                <Text style={styles.buttonText}>Weather App</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 15,
    backgroudColor: 'red',
    borderColor: 'darkgreen',
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'darkblue',
    fontFamily: 'Algerian',
    fontSize: 25,
  },
  button1: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 15,
    backgroudColor: 'red',
    borderColor: 'darkgreen',
    marginTop: 50,
    width: 200,
    height: 80,
  },
  button3:{
        justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 15,
    backgroudColor: 'red',
    borderColor: 'darkgreen',
    width: 215,
    height: 100,
  },
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 15,
    backgroudColor: 'red',
    borderColor: 'darkgreen',
    marginTop: 50,
    width: 215,
    height: 100,
  },
  subContainer: {
    marginTop: 50,
    flex: 1,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: 'cyan',
    paddingBottom: 50,
  },
    title: {
    margin: 10,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
