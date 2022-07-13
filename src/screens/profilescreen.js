import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';

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
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            paddingVertical: 50,
            paddingHorizontal: 20,
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              resizeMode: 'contain',
            }}
            source={{
              uri: 'https://1.bp.blogspot.com/-NWjc1sgKjMg/XghHhgUyUhI/AAAAAAAAc5M/5qJC0DlEid0BtWZ3trYbhThEULE3HD73wCLcBGAsYHQ/s1600/Beautiful%2BEyes%2BDP%2Bfor%2BWhatsapp%2Band%2BFacebook%2B%25284%2529.jpg',
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginLeft: 40,
            }}>
            <Text
              style={{
                width: '80%',
                color: 'black',
                // textAlign: 'center',
                fontSize: 20,
                fontWeight: '600',
                // marginHorizontal: 20,
              }}>
              Tom Cruise
            </Text>
            <View
              style={{
                width: 200,
                height: 45,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  // width: '80%',
                  color: 'black',
                  // textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                  // marginHorizontal: 20,
                }}>
                Edit Profile
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: 'grey'}} />
        <FlatList
          numColumns={3}
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
              <Image
                style={{
                  margin: 4,
                  width: 135,
                  height: 135,
                  // borderRadius: 100,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/1080p-New-Cool-Whatsapp-Dp-Profile-Images-photo-1-300x300.jpg',
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
