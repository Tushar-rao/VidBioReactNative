import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Routes} from '../../RootNavigation/Routes';
const win = Dimensions.get('window');
const ChannelEdit = () => {
  const Navigation = useNavigation();
  const Navigate = Navigation.navigate;

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, color: 'black', marginTop: 50}}>
        SMS Channel
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
      <Text style={styles.commontxt}>Change Icon</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          // paddingVertical: win.height / 20,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            resizeMode: 'contain',
            marginLeft: -20,
          }}
          source={{
            uri: 'https://1.bp.blogspot.com/-NWjc1sgKjMg/XghHhgUyUhI/AAAAAAAAc5M/5qJC0DlEid0BtWZ3trYbhThEULE3HD73wCLcBGAsYHQ/s1600/Beautiful%2BEyes%2BDP%2Bfor%2BWhatsapp%2Band%2BFacebook%2B%25284%2529.jpg',
          }}
        />

        <View
          style={{
            width: win.width / 4,
            height: 45,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
          }}>
          <Text
            style={{
              // width: '80%',
              color: 'white',
              // textAlign: 'center',
              fontSize: win.width / 28,
              fontWeight: '400',

              // marginHorizontal: 20,
            }}>
            Change
          </Text>
        </View>
        <View
          style={{
            width: win.width / 4,
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
              fontSize: win.width / 28,
              fontWeight: '400',

              // marginHorizontal: 20,
            }}>
            Remove
          </Text>
        </View>
      </View>

      <View style={{marginTop: win.height / 55}}>
        <Text style={styles.commontxt}>Label</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View>
        <Text style={styles.commontxt}>Phone Number</Text>
        <TextInput style={styles.textInput} />
      </View>
      {/* <View style={{marginTop: win.height / 20}}>
        <View style={styles.txtbtn}>
          <Text style={styles.btntxt}>Save Changes</Text>
        </View>
        <View style={styles.greytxtbtn}>
          <Text style={styles.btntxt}>Remove Channel</Text>
        </View>
      </View> */}
      <TouchableOpacity
        onPress={() => Navigate(Routes.SelectLayout)}
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
        }}>
        <Text style={{fontSize: 60, color: 'black'}}>-</Text>
      </TouchableOpacity>
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

export default ChannelEdit;
