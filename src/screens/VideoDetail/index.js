import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
const win = Dimensions.get('window');
import PrimaryBtn from '../../components/YellowButton';

const VideoDetail = () => {
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

      <View
        style={{
          width: win.width / 5,
          height: win.height / 9.5,
          backgroundColor: 'rgb(253,188,32)',
          position: 'absolute',
          bottom: win.height / 40,
          right: win.width / 14,
          borderRadius: 100,
        }}
      />
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
