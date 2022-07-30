import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const win = Dimensions.get('window');

import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetTab from '../../components/BottomSheetTab';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../RootNavigation/Routes';
import PrimaryBtn from '../../components/YellowButton';

import * as ImagePicker from 'react-native-image-picker';
import {BASE_URL} from '../../components/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
const VideoDetail = () => {
  const ref = useRef();

  //for navigation
  const Navigation = useNavigation();
  const Navigate = Navigation.navigate;

  //constents for our api
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [loading, setLoading] = useState(false);

  //fething our api
  const createpage = () => {
    setLoading(true);
    async function getUserToken() {
      return await AsyncStorage.getItem('userInfo');
    }

    if (name == '') {
      ToastAndroid.show('Please Fill Your Name', ToastAndroid.SHORT);

      setLoading(false);
    } else if (description == '') {
      ToastAndroid.show('Please Enter Description', ToastAndroid.SHORT);

      setLoading(false);
    } else {
      getUserToken().then(userToken => {
        const requestOptions = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            token: userToken.replace('"', '').replace('"', ''),
          },
          body: JSON.stringify({
            name: name,
            description: description,
          }),
        };
        fetch(`${BASE_URL}/page/create`, requestOptions)
          .then(res => res.json())
          .then(res => {
            console.log(res);
            console.log(userToken);
            setLoading(false);
            ref.current.open();
          })
          .catch(e => {
            console.log(e);
            ToastAndroid.show(`Server error ${e}`, ToastAndroid.SHORT);

            setLoading(false);
          });
      });
    }
  };

  //our bottom sheet components
  const Sheetcomponent = () => {
    return (
      <View style={{flexDirection: 'column', width: '100%'}}>
        <Text style={{fontSize: 16, color: 'black', marginLeft: 20}}>
          VideoLink Type
        </Text>
        <BottomSheetTab
          onclick={() => {
            ref.current.close();
            recordVideo();
          }}
          Tabtext={'Record Video'}
        />
        <BottomSheetTab
          onclick={() => {
            ref.current.close();
            selectVideo();
          }}
          Tabtext={'Upload From Gallery'}
        />
        <BottomSheetTab
          onclick={() => {}}
          Tabtext={'Select From Video Library'}
        />
      </View>
    );
  };

  //video picker
  const recordVideo = async () => {
    ImagePicker.launchCamera(
      {mediaType: 'video', includeBase64: true},
      response => {
        console.log(response, 'resres');
        Navigate(Routes.VideoUploadLoading, {video: response});
      },
    );
  };
  const selectVideo = async () => {
    ImagePicker.launchImageLibrary(
      {mediaType: 'video/mp4', includeBase64: true},
      response => {
        console.log(response, 'resres');

        Navigate(Routes.VideoUploadLoading, {video: response});
      },
    );
  };

  //UI SECTION
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
          fontSize: 28,
          fontWeight: '400',
          marginVertical: 40,
          marginTop: 100,
        }}>
        Create Videolink
      </Text>

      <View>
        <Text style={styles.txtinputheader}>Name</Text>
        <TextInput
          style={styles.txtinput}
          onChangeText={input => setname(input)}
        />
        <Text style={styles.txtinputheader}>Description</Text>
        <TextInput
          onChangeText={input => setdescription(input)}
          style={[styles.txtinput, {height: 120, textAlignVertical: 'top'}]}
        />
      </View>

      <TouchableOpacity
        onPress={() => createpage()}
        style={{
          width: win.width / 5,
          height: win.height / 9.5,
          backgroundColor: 'rgb(253,188,32)',
          position: 'absolute',
          bottom: win.height / 40,
          right: win.width / 14,
          borderRadius: 100,
        }}></TouchableOpacity>
      <RBSheet
        ref={ref}
        height={win.height / 2.5}
        openDuration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{}}>
        <Sheetcomponent />
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // alignItems:"center"
  },
  txtinput: {
    width: '95%',
    backgroundColor: 'rgb(216,214,214)',
    borderRadius: 10,
    padding: 15,
    marginTop: 5,
    alignSelf: 'center',
  },
  txtinputheader: {
    fontSize: 16,
    color: 'grey',
    marginTop: win.height / 45,
  },
});

export default VideoDetail;
