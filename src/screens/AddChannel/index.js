import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
const win = Dimensions.get('window');
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetTab from '../../components/BottomSheetTab';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../RootNavigation/Routes';
import PrimaryBtn from '../../components/YellowButton';

import * as ImagePicker from 'react-native-image-picker';
import {BASE_URL} from '../../components/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddChannel = () => {
  const ref = useRef();

  //for navigation
  const Navigation = useNavigation();
  const Navigate = Navigation.navigate;

  //UI SECTION
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
          fontSize: 28,
          fontWeight: '400',
          marginTop: 100,
          marginLeft: 35,
        }}>
        Add Channels
      </Text>

      <View style={styles.searchSection}>
        <FontAwesomeIcon icon={faSearch} size={20} />
        <TextInput
          style={styles.input}
          placeholder="Search Channel Here"
          underlineColorAndroid="transparent"
        />
      </View>
      <FlatList
        numColumns={2}
        contentContainerStyle={{marginTop: 20, alignSelf: 'center'}}
        data={[{}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={item => {
          return (
            <TouchableOpacity
              onPress={() => Navigate(Routes.ChannelEdit)}
              style={{
                height: 65,
                width: 160,
                backgroundColor: 'rgb(253,188,32)',
                margin: 5,
                borderRadius: 10,
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 22, color: 'black', fontWeight: '500'}}>
                Phone
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchSection: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    width: '85%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    marginLeft: 20,
  },
});

export default AddChannel;
