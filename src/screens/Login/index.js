import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PrimaryBtn from '../../components/YellowButton';
import {AuthContext} from '../../components/AuthContext';
import {Routes} from '../../RootNavigation/Routes';
import {useNavigation} from '@react-navigation/native';
const win = Dimensions.get('window');
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const UL = props => (
    <Text style={{textDecorationLine: 'underline', color: 'rgb(253,188,32)'}}>
      {props.children}
    </Text>
  );
  const {isLoading, userlogin} = useContext(AuthContext);
  const Navigation = useNavigation();
  const Navigate = Navigation.navigate;

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
        <TextInput
          value={email}
          placeholder="Enter Your Email Id"
          onChangeText={text => setEmail(text)}
          style={styles.txtinput}
        />
        <Text style={styles.txtinputheader}>Password</Text>
        <TextInput
          style={styles.txtinput}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={() => Navigate(Routes.ForgetPass)}>
        <Text
          style={{
            fontSize: 16,
            color: 'rgb(253,188,32)',
            marginVertical: win.height / 45,
            fontWeight: 'bold',
          }}>
          Forgot Password ?
        </Text>
      </TouchableOpacity>
      <PrimaryBtn
        borderradius={10}
        BtnText={'Login'}
        styling={{alignSelf: 'center'}}
        onclick={() => userlogin(email, password)}
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
      <TouchableOpacity onPress={() => Navigate(Routes.Register)}>
        <Text style={[styles.txtinputheader, {alignSelf: 'center'}]}>
          Don't have an account? <UL>Create account</UL>
        </Text>
      </TouchableOpacity>
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

export default Login;
