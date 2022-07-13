import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PrimaryBtn from './src/components/YellowButton';

const win = Dimensions.get('window');
const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: win.height / 2.2,
          height: win.width / 1.2,
          resizeMode: 'contain',
          marginTop: win.height / 10,
          alignSelf: 'center',
        }}
        source={require('./assets/forgetpass2.png')}
      />
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          marginTop: win.height / 15,
          fontWeight: '400',
          alignSelf: 'center',
        }}>
        Check Your Mail
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          marginTop: win.height / 65,
          alignSelf: 'center',
          textAlign: 'center',
          width: '90%',
        }}>
        we have sent an password recovery instructions to the given email
        address.
      </Text>

      <PrimaryBtn
        borderradius={10}
        BtnText={'Open Email App'}
        styling={{alignSelf: 'center', marginVertical: 40}}
      />
      <Text
        style={{
          fontSize: 16,
          color: 'grey',
          alignSelf: 'center',
          textAlign: 'center',
          width: '90%',
        }}>
        Did not recieve any email ? Send again
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
