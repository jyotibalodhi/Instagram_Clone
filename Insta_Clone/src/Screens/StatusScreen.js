import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Status = ({route, navigation}) => {
  const {name} = route.params;
  const {avatar} = route.params;
  const {image} = route.params;
  const {place} = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <View
      style={{
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
        position: 'relative',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}></Animated.View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 10,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            borderRadius: 100,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: avatar}}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: '92%',
              height: '92%',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{flexDirection: 'column', padding: 10}}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}>
              {name}
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
              }}>
              {place}
            </Text>
          </View>
          <TouchableOpacity
            style={{margin: 15}}
            onPress={() => navigation.goBack()}>
            <Ionicon
              name="close"
              style={{color: 'white', fontSize: 20, opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={{uri: image}}
        style={{
          width: '100%',
          height: '78%',
          position: 'absolute',
          top: 90,
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 3,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Send message..."
          placeholderTextColor="white"
          style={{
            borderColor: 'white',
            left: 5,
            borderWidth: 1,
            borderRadius: 25,
            padding: 10,
            width: '90%',
            fontSize: 20,
            color: 'white',
          }}
        />
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigation.goBack()}>
          <Ionicon
            name="paper-plane-outline"
            style={{
              fontSize: 25,
              color: 'white',
              left: 5,
            }}></Ionicon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
