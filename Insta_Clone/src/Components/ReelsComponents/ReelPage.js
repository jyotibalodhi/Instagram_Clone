import React, {useRef} from 'react';
import {Text, Dimensions, View, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

const ReelPage = () => {
  // const ReelPage = ({item, index, currentIndex}) => {
  //   const windowWidth = Dimensions.get('window').width;
  //   const windowHeight = Dimensions.get('window').height;

  //   const videoRef = useRef(null);

  //   const onBuffer = buffer => {
  //     console.log(' 🏃‍♂️ Getting there...', buffer);
  //   };

  //   const onError = error => {
  //     console.log("There's something wrong 🧐", error);
  //   };

  return (
    <Text style={{color: 'white', top: 50, left: 30, height: '100%'}}>
      yeahh it's not working for now. But will come soooon....
    </Text>
    // <View
    //   style={{width: windowWidth, height: windowHeight, position: 'relative'}}>
    //   <TouchableOpacity
    //     style={{width: '100%', height: '100%', position: 'absolute'}}>
    //     <Video
    //       videoRef={videoRef}
    //       onBuffer={onBuffer}
    //       onError={onError}
    //       repeat={true}
    //       resizeMode="cover"
    //       paused={false}
    //       source={item.video}></Video>
    //   </TouchableOpacity>
    // </View>
  );
};

export default ReelPage;
