import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Routes} from '../../RootNavigation/Routes';
const win = Dimensions.get('window');
const SelectLayout = () => {
  const Navigation = useNavigation();
  const Navigate = Navigation.navigate;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,

          backgroundColor: '#fff',
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
          showsVerticalScrollIndicator={false}
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

        <TouchableOpacity
          onPress={() => Navigate(Routes.VidCreated)}
          style={{
            width: 70,
            height: 70,
            backgroundColor: 'rgb(253,188,32)',
            position: 'absolute',
            bottom: win.height / 40,
            right: win.width / 14,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}></TouchableOpacity>
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

export default SelectLayout;
