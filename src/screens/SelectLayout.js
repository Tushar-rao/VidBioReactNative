import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
const win = Dimensions.get('window');
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
            fontSize: win.width / 25,
          }}>
          BACK BUTTON
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: win.width / 25,
          }}>
          SKIP
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={{fontSize: 24, color: 'black', marginTop: 20}}>
          Select Layout
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            paddingVertical: win.height / 100,
          }}>
          Any sample text you want to use can be go here for example we want to
          add some text regarding sms channel so we can use that
        </Text>
        <FlatList
          numColumns={2}
          contentContainerStyle={{alignItems: 'center'}}
          data={[
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
          ]}
          renderItem={item => {
            return (
              <View
                style={{
                  margin: 14,
                  width: win.width / 2.5,
                  height: win.height / 3.5,
                  borderWidth: 1,
                  borderColor: 'teal',
                  backgroundColor: '#fff',
                  resizeMode: 'contain',
                }}
              />
            );
          }}
        />

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textInput: {
    width: '95%',
    height: win.height / 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
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
  commontxt: {
    paddingVertical: win.height / 35,
    width: '80%',
    color: 'black',

    fontSize: win.width / 22,
    fontWeight: '600',
  },
  btntxt: {color: 'black', fontSize: win.width / 28},
});

export default App;
