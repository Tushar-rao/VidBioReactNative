import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
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
        <View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 70,
              borderWidth: 1,
              borderColor: 'grey',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  backgroundColor: 'grey',
                  marginHorizontal: 10,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                }}>
                User Name
              </Text>
            </View>
            <Text
              style={{
                color: 'black',
                fontSize: 40,
                marginRight: 30,
              }}>
              +
            </Text>
          </View>
          <View>
            <View
              style={{
                backgroundColor: 'grey',
                width: '100%',
                height: 300,
              }}
            />
          </View>
          <View
            style={{
              height: 100,
              borderColor: 'black',
              borderWidth: 1,
              padding: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit et
              sed faucibus facilisis augue a.
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 70,
          height: 70,
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
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
