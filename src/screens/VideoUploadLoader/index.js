import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {BASE_URL} from '../../components/config';
import {Routes} from '../../RootNavigation/Routes';

const win = Dimensions.get('window');

const VideoUploadLoading = ({route}) => {
  //   console.log(route.params.video.assets[0]);
  const Navigation = useNavigation();
  const Navigate = Navigation.replace;
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    async function getUserToken() {
      return await AsyncStorage.getItem('userInfo');
    }
    let formData = new FormData();
    formData.append('file', {
      name: route.params.video.assets[0].fileName,
      uri: route.params.video.assets[0].uri,
      type: 'video/mp4',
    });

    console.log(formData);
    getUserToken().then(userToken => {
      fetch(BASE_URL + '/videos/upload', {
        method: 'POST',
        headers: {
          token: userToken.replace('"', '').replace('"', ''),
        },
        body: formData,
      })
        .then(res => res.json())
        .then(response => {
          console.log(response);
          setloading(false);
          Navigate(Routes.VideoChannelSelect, {videourl: response.video.src});
          //now here we have to put navigation for going next after uploading our video
        })
        .catch(error => {
          console.log(error);
        });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          marginTop: win.height / 15,
          alignSelf: 'center',
        }}>
        Video is Being Processed
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          paddingVertical: win.height / 120,
          paddingHorizontal: 40,
          textDecorationLine: 'underline',
          textAlign: 'center',
        }}>
        It will take a couple of minutes, Please Wait !
      </Text>

      {loading ? (
        <Image
          style={{
            width: win.height / 4.2,
            height: win.width / 3.2,
            resizeMode: 'contain',

            alignSelf: 'center',
          }}
          source={require('../../assets/loader.gif')}
        />
      ) : null}

      <Image
        style={{
          width: win.height / 2.2,
          height: win.width / 1.2,
          resizeMode: 'contain',
          marginTop: win.height / 20,
          alignSelf: 'center',
          position: 'absolute',
          bottom: 20,
        }}
        source={require('../../assets/uploadloader.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  txtbtn: {
    width: '95%',
    height: win.height / 16,
    borderRadius: 100,
    backgroundColor: 'rgb(253,188,32)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greytxtbtn: {
    width: '95%',
    height: win.height / 16,
    borderRadius: 100,
    backgroundColor: 'rgb(216,214,214)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: win.height / 55,
  },
  btntxt: {color: 'black', fontSize: win.width / 28},
});

export default VideoUploadLoading;
