import React, {useState} from 'react';

import {Dimensions, Text, View, TouchableOpacity} from 'react-native';

const win = Dimensions.get('window');
const BottomSheetTab = ({Tabtext, onclick}) => {
  return (
    <TouchableOpacity
      onPress={onclick}
      style={{
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        paddingHorizontal: 20,
        height: win.height / 9.5,
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>{Tabtext}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default BottomSheetTab;
