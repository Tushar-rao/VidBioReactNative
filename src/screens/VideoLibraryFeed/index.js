import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
const win = Dimensions.get('window');

const VideoLibraryFeed = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
          }}>
          Video Library
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
          }}>
          Record, upload and manage your videos here.
        </Text>
      </View>
      <View style={{width: '100%', height: 1, backgroundColor: 'grey'}} />
      <View style={styles.container}>
        <ImageBackground
          style={{
            width: win.width,
            height: win.height / 2.2,
            backgroundColor: 'grey',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 40,
                  backgroundColor: 'white',
                  marginRight: 20,
                }}
              />
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 40,
                  backgroundColor: 'white',
                }}
              />
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 40,
                backgroundColor: 'white',
              }}
            />
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              bottom: 100,
              position: 'absolute',
              left: 30,
            }}>
            Video Name
          </Text>
          <Text style={{bottom: 30, position: 'absolute', alignSelf: 'center'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit et sed
            faucibus facilisis augue a dolor sit amet, consectetur adipiscing
            elit. Elit et sed faucibus facilisis augue a.. View Less
          </Text>
        </ImageBackground>
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
    marginTop: 10,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default VideoLibraryFeed;
