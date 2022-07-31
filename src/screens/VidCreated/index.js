import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import PrimaryBtn from '../../components/YellowButton';
import {Routes} from '../../RootNavigation/Routes';

const win = Dimensions.get('window');
const VidCreated = () => {
  const Navigation = useNavigation();
  const Navigate = Navigation.navigate;
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          marginTop: win.height / 15,
          alignSelf: 'center',
        }}>
        VideoLink Created
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
        https://www.youtube.com/watch?v=S1mZOSp0_IE&list=RDS1mZOSp0_IE&start_radio=1
      </Text>
      <Image
        style={{
          width: win.height / 2.2,
          height: win.width / 1.2,
          resizeMode: 'contain',
          marginTop: win.height / 20,
          alignSelf: 'center',
        }}
        source={require('../../assets/pic1.png')}
      />
      <View style={{marginTop: win.height / 10}}>
        <PrimaryBtn
          BtnText={'Copy Link'}
          styling={{alignSelf: 'center'}}
          onclick={() => console.log('Copy Link')}
        />

        <PrimaryBtn
          BtnText={'Go To HomePage'}
          btncolor={'rgb(216,214,214)'}
          styling={{marginTop: win.height / 55, alignSelf: 'center'}}
          onclick={() => Navigate('TabStack')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});

export default VidCreated;
