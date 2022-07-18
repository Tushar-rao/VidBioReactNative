import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const win = Dimensions.get('window');
const App = () => {
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
        <View style={styles.txtbtn}>
          <Text style={styles.btntxt}>Copy Link</Text>
        </View>
        <View style={styles.greytxtbtn}>
          <Text style={styles.btntxt}>Go To HomePage</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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

export default App;
