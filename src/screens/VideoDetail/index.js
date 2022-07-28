import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
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
const VideoDetail = () => {
  const ref = useRef();
  const Navigation = useNavigation();
  const Navigate = Navigation.navigate;

  const Sheetcomponent = () => {
    return (
      <View style={{flexDirection: 'column', width: '100%'}}>
        <Text style={{fontSize: 16, color: 'black', marginLeft: 20}}>
          VideoLink Type
        </Text>
        <BottomSheetTab
          onclick={() => recordVideo()}
          Tabtext={'Record Video'}
        />
        <BottomSheetTab
          onclick={() => selectVideo()}
          Tabtext={'Upload From Gallery'}
        />
        <BottomSheetTab
          onclick={() => {}}
          Tabtext={'Select From Video Library'}
        />
      </View>
    );
  };

  const recordVideo = async () => {
    ImagePicker.launchCamera(
      {mediaType: 'video', includeBase64: true},
      response => {
        console.log(response);
      },
    );
  };
  const selectVideo = async () => {
    ImagePicker.launchImageLibrary(
      {mediaType: 'video', includeBase64: true},
      response => {
        console.log(response);
      },
    );
  };

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
        Vidbio
      </Text>

      <View>
        <Text style={styles.txtinputheader}>Name</Text>
        <TextInput style={styles.txtinput} />
        <Text style={styles.txtinputheader}>Description</Text>
        <TextInput
          style={[styles.txtinput, {height: 120, textAlignVertical: 'top'}]}
        />
      </View>

      <TouchableOpacity
        onPress={() => ref.current.open()}
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
