import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {createContext, useEffect, useState} from 'react';
import {Alert, ToastAndroid} from 'react-native';
import {Routes} from '../RootNavigation/Routes';
import {BASE_URL} from './config';
const axios = require('axios').default;

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (first_name, last_name, email, password) => {
    setIsLoading(true);
    axios
      .post(
        `${BASE_URL}/register`,
        {
          firstName: first_name,
          lastName: last_name,
          email: email,
          password: password,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        console.log('register', res);
        // let userInfo = res.data;
        // setUserInfo(userInfo.api_token);
        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo.api_token));
        setIsLoading(false);
        ToastAndroid.show('Registered Successfully !', ToastAndroid.SHORT);
      })
      .catch(e => {
        ToastAndroid.show('Please Re-check Credentials', ToastAndroid.SHORT);
        setIsLoading(false);
      });
  };

  const userlogin = async (email, password) => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/login`,
        {
          email: email,
          password: password,
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
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo.token));
        UserisLoggedIn();
        console.log('done');
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
        ToastAndroid.show(`userlogin error ${e}`, ToastAndroid.SHORT);
        setIsLoading(false);
      });
  };

  const logout = () => {
    AsyncStorage.removeItem('userInfo');

    setUserInfo('');
  };

  const UserisLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);
      console.log(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
      }
    } catch (e) {
      ToastAndroid.show('Some Issue !', ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    UserisLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        userlogin,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
