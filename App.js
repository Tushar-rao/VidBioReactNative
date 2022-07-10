import React, {useRef, useMemo} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
const win = Dimensions.get('window');
const App = () => {
  // ref
  const bottomSheetRef = useRef < BottomSheet > null;

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

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
          source={require('./assets/add_icon.png')}
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
      <View style={styles.txtbtn}>
        <Text style={styles.btntxt}>OPEN BOTTOM SHEET</Text>
      </View>
      <BottomSheet index={1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  txtbtn: {
    width: '55%',
    height: win.height / 16,
    borderRadius: 100,
    backgroundColor: 'rgb(253,188,32)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 50,
  },
  btntxt: {color: 'black', fontSize: win.width / 28},
});

export default App;
