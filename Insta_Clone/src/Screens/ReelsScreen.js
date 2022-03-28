import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsContent from '../Components/ReelsComponents/ReelsContent';

const ReelsScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'black',
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 1,
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Reels
        </Text>
        <TouchableOpacity>
          <Feather
            name="camera"
            style={{fontSize: 25, color: 'white'}}></Feather>
        </TouchableOpacity>
      </View>
      <ReelsContent />
    </View>
  );
};

export default ReelsScreen;
