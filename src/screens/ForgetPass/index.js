import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PrimaryBtn from '../../components/YellowButton';
import {BASE_URL} from '../../components/config';
import axios from 'axios';
import {Routes} from '../../RootNavigation/Routes';
import {useNavigation} from '@react-navigation/native';
const win = Dimensions.get('window');
const ForgetPass = () => {
  const [email, setEmail] = useState('');

  const forgetpass = async email => {
    axios
      .post(
        `${BASE_URL}/forgot-password`,
        {
          email: email,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        let userInfo = res.data;
        Navigate(Routes.CheckMail);
        console.log('done');
      })
      .catch(e => {
        console.log(e);
        Alert.alert(`userlogin error ${e}`);
      });
  };
  const Navigation = useNavigation();
  const Navigate = Navigation.navigate;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{
            width: win.height / 2.2,
            height: win.width / 1.2,
            resizeMode: 'contain',
            marginTop: win.height / 20,
            alignSelf: 'center',
          }}
          source={require('../../assets/forgetpass.png')}
        />
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            marginTop: win.height / 15,
            fontWeight: '400',
          }}>
          Forget Password
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            marginTop: win.height / 65,
          }}>
          Don't worry ! it happens. Please enter the email id associated with
          your account
        </Text>
        <View>
          <Text style={styles.txtinputheader}>Email Address</Text>
          <TextInput
            value={email}
            placeholder="Enter Your Email Id"
            onChangeText={text => setEmail(text)}
            style={styles.txtinput}
          />
        </View>

        <PrimaryBtn
          borderradius={10}
          BtnText={'Send Link'}
          styling={{alignSelf: 'center', marginVertical: 20}}
          onclick={() => forgetpass(email)}
        />
      </ScrollView>
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

export default ForgetPass;
