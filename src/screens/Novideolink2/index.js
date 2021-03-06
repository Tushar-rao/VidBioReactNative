import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
          }}>
          Vidbio
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
          }}>
          +
        </Text>
      </View>
      <View style={{width: '100%', height: 1, backgroundColor: 'grey'}} />
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50, resizeMode: 'contain'}}
          source={require('../../assets/add_icon.png')}
        />
        <Text
          style={{
            width: '80%',
            color: 'grey',
            textAlign: 'center',
            fontSize: 16,
            marginVertical: 20,
          }}>
          You dont have any video link create some
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
