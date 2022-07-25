import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../../components/AuthContext';
import PrimaryBtn from '../../components/YellowButton';

import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetTab from '../../components/BottomSheetTab';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../RootNavigation/Routes';

const NoVideoLink = () => {
  const win = Dimensions.get('window');
  const ref = useRef();
  const {logout} = React.useContext(AuthContext);

  const Navigation = useNavigation();
  const Navigate = Navigation.navigate;

  const Sheetcomponent = () => {
    return (
      <View style={{flexDirection: 'column', width: '100%'}}>
        <Text style={{fontSize: 16, color: 'black', marginLeft: 20}}>
          VideoLink Type
        </Text>
        <BottomSheetTab
          onclick={() => Navigate(Routes.VideoDetail)}
          Tabtext={'Videolink with single video'}
        />
        <BottomSheetTab
          onclick={() => {}}
          Tabtext={'Videolink with multiple video'}
        />
      </View>
    );
  };

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
          style={{width: 300, height: 300, resizeMode: 'contain'}}
          source={require('../../assets/pic2.png')}
        />
        <Text
          style={{
            width: '80%',
            color: 'grey',
            textAlign: 'center',
            fontSize: 16,
            marginVertical: 20,
          }}>
          You dont have any video link , create now by clicking the add button
        </Text>
        <PrimaryBtn
          borderradius={30}
          BtnText={'Logout'}
          styling={{alignSelf: 'center'}}
          onclick={() => logout()}
        />
      </View>
      <RBSheet
        ref={ref}
        height={win.height / 3.5}
        openDuration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{}}>
        <Sheetcomponent />
      </RBSheet>

      <TouchableOpacity
        onPress={() => ref.current.open()}
        style={{
          width: win.width / 5,
          height: win.height / 9.5,
          backgroundColor: 'rgb(253,188,32)',
          position: 'absolute',
          bottom: win.height / 40,
          right: win.width / 14,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 60, color: 'black'}}>+</Text>
      </TouchableOpacity>
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

export default NoVideoLink;
