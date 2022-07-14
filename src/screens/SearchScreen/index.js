import React from 'react';
import {StyleSheet, Text, View, Dimensions,TextInput,FlatList,Image} from 'react-native';
const win = Dimensions.get('window');
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faLinesLeaning } from '@fortawesome/free-solid-svg-icons/'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:"center",
          padding: 20,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
          }}>
          Vidbio
        </Text>
        <FontAwesomeIcon icon={faSearch} size={25} />
       
      </View>
      <View style={{width: '100%', height: 1, backgroundColor: 'grey'}} />
      <View style={styles.container}>
      <View style={styles.searchSection}>
      <FontAwesomeIcon icon={faSearch} size={20} />
    <TextInput
        style={styles.input}
        placeholder="Search VideoLink Here"
        // onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
</View>

<FlatList
          numColumns={2}
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
          contentContainerStyle={{alignItems:"center",marginTop:40}}
          renderItem={item => {
            return (
              <Image
                style={{
                  margin: 4,
                  width: 200,
                  height: 200,
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
    // justifyContent: 'center',
    alignItems: 'center',

  },
  searchSection: {
    marginTop:30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth:1,borderColor:"black",
    padding:10,
    width:"85%",
    borderRadius:10
},
searchIcon: {
    padding: 10,
    
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    marginLeft:20
    
},
});

export default App;
