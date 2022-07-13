import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PrimaryBtn from './src/components/YellowButton';

const win = Dimensions.get('window');
const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          marginTop: win.height / 15,
          fontWeight: '400',
        }}>
        Login
      </Text>
      <View>
        <Text style={styles.txtinputheader}>Email Address</Text>
        <TextInput style={styles.txtinput} />
        <Text style={styles.txtinputheader}>Password</Text>
        <TextInput style={styles.txtinput} />
      </View>
      <Text
        style={{
          fontSize: 16,
          color: 'rgb(253,188,32)',
          marginVertical: win.height / 45,
          fontWeight: 'bold',
        }}>
        Forgot Password ?
      </Text>
      <PrimaryBtn
        borderradius={10}
        BtnText={'Create Account'}
        styling={{alignSelf: 'center'}}
      />
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'rgb(216,214,214)',
          marginVertical: win.height / 25,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <PrimaryBtn
          BtnText={''}
          btncolor={'rgb(216,214,214)'}
          width={'40%'}
          borderradius={10}
        />
        <PrimaryBtn
          BtnText={''}
          btncolor={'rgb(216,214,214)'}
          width={'40%'}
          borderradius={10}
        />
      </View>
      <Text style={[styles.txtinputheader, {alignSelf: 'center'}]}>
        Don't have an account? Create account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txtinput: {
    width: '95%',
    backgroundColor: 'rgb(216,214,214)',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    alignSelf: 'center',
  },
  txtinputheader: {
    fontSize: 16,
    color: 'grey',
    marginTop: win.height / 25,
  },
});

export default App;
