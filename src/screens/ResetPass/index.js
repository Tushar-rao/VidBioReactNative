import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PrimaryBtn from '../../components/YellowButton';

const win = Dimensions.get('window');
const Resetpass = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: win.height / 2.2,
          height: win.width / 1.2,
          resizeMode: 'contain',
          // marginTop: win.height / 20,
          alignSelf: 'center',
        }}
        source={require('../../assets/forgetpass3.png')}
      />
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          // marginTop: win.height / 15,
          fontWeight: '400',
        }}>
        Reset Password
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          marginTop: 4,
        }}>
        Your new password must be different from previously used passwords
      </Text>
      <View style={{marginTop: 20}}>
        <Text style={styles.txtinputheader}>New Password</Text>
        <TextInput style={styles.txtinput} />
        <Text style={styles.txtinputheader}>Confirm Password</Text>
        <TextInput style={styles.txtinput} />
      </View>

      <PrimaryBtn
        borderradius={10}
        BtnText={'Save Changes'}
        styling={{alignSelf: 'center', marginVertical: 30}}
      />
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
    marginTop: win.height / 45,
  },
});

export default Resetpass;
