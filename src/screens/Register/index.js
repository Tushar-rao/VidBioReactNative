import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {AuthContext} from '../../components/AuthContext';
import PrimaryBtn from '../../components/YellowButton';
import {Routes} from '../../RootNavigation/Routes';

const win = Dimensions.get('window');
const Register = () => {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const UL = props => (
    <Text style={{textDecorationLine: 'underline', color: 'rgb(253,188,32)'}}>
      {props.children}
    </Text>
  );

  const {isLoading, register} = useContext(AuthContext);
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
        Create Account
      </Text>
      <View>
        <Text style={styles.txtinputheader}>First Name</Text>
        <TextInput
          style={styles.txtinput}
          value={first_name}
          placeholder="Enter Your First Name"
          onChangeText={text => setfirst_name(text)}
        />
        <Text style={styles.txtinputheader}>Last Name</Text>
        <TextInput
          style={styles.txtinput}
          value={last_name}
          placeholder="Enter Your Last Name"
          onChangeText={text => setlast_name(text)}
        />
        <Text style={styles.txtinputheader}>Email Address</Text>
        <TextInput
          style={styles.txtinput}
          value={email}
          placeholder="Enter Your Email Id"
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.txtinputheader}>Password</Text>
        <TextInput
          style={styles.txtinput}
          value={password}
          placeholder="Enter Your Password"
          onChangeText={text => setPassword(text)}
        />
        <Text style={styles.txtinputheader}>Confirm Password</Text>
        <TextInput
          style={styles.txtinput}
          value={confirmpassword}
          placeholder="Confirm Your Password"
          onChangeText={text => setconfirmPassword(text)}
        />
      </View>

      <PrimaryBtn
        borderradius={10}
        BtnText={'Create Account'}
        styling={{alignSelf: 'center', marginTop: win.height / 35}}
        onclick={() => register(first_name, last_name, email, password)}
      />

      <TouchableOpacity onPress={() => Navigate(Routes.Login)}>
        <Text style={[styles.txtinputheader, {alignSelf: 'center'}]}>
          Already have an account? <UL>Login</UL>
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
    marginTop: win.height / 45,
  },
});

export default Register;
