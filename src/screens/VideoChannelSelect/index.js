import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import {Routes} from '../../RootNavigation/Routes';
const win = Dimensions.get('window');

const VideoChannelSelect = ({route}) => {
  //for navigation
  const Navigation = useNavigation();
  const Navigate = Navigation.navigate;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 20,
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
          }}>
          Back
        </Text>
      </View>
      <View style={{width: '100%', height: 1, backgroundColor: 'grey'}} />

      <ScrollView style={styles.container}>
        {/* Video */}
        <Video
          source={{
            uri: route.params.videourl,
          }}
          style={{
            width: win.width,
            height: win.height / 2.2,
            backgroundColor: 'grey',
            paddingHorizontal: 20,
          }}
          resizeMode={'cover'}
          ignoreSilentSwitch={'obey'}
        />
        {/* Video OverLay */}
        <View
          style={{
            position: 'absolute',
            width: '95%',
            height: win.height / 2.2,
            alignSelf: 'center',
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
                  width: 30,
                  height: 30,
                  borderRadius: 40,
                  backgroundColor: 'white',
                  marginRight: 20,
                }}
              />
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 40,
                  backgroundColor: 'white',
                  marginRight: 20,
                }}
              />
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 40,
                  backgroundColor: 'white',
                }}
              />
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 40,
                backgroundColor: 'white',
              }}
            />
          </View>
        </View>

        {/* Under Video Channels */}
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            marginTop: win.height / 50,
            marginLeft: 20,
          }}>
          Channel Selected
        </Text>
        <TouchableOpacity
          onPress={() => Navigate(Routes.AddChannel)}
          style={{
            width: win.width / 2.5,
            height: 45,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginLeft: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: win.width / 28,
              fontWeight: '400',
            }}>
            + Add More
          </Text>
        </TouchableOpacity>
      </ScrollView>

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
    backgroundColor: 'white',
  },
});

export default VideoChannelSelect;
