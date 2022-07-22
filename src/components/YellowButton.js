import React, {useState} from 'react';

import {Dimensions, Text, View, TouchableOpacity} from 'react-native';

const win = Dimensions.get('window');
const PrimaryBtn = ({
  height,
  width,
  borderradius,
  BtnText,
  btncolor,
  styling,
  onclick,
}) => {
  return (
    <TouchableOpacity
      onPress={onclick}
      style={[
        {
          width: width ? width : '95%',
          height: height ? height : win.height / 14,
          borderRadius: borderradius ? borderradius : 100,
          backgroundColor: btncolor ? btncolor : 'rgb(253,188,32)',
          alignItems: 'center',
          justifyContent: 'center',
        },
        styling,
      ]}>
      <Text style={{color: 'black', fontSize: win.width / 28}}>{BtnText}</Text>
    </TouchableOpacity>
  );
};
export default PrimaryBtn;
