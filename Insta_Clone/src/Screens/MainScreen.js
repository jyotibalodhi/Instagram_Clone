import React from 'react';
import {View, ScrollView, StatusBar, Text} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import StoriesBar from '../Components/StatusBar/StoriesBar';
import Post from '../Components/Post/Post';

const Main = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <Ionicon name="camera-outline" style={{fontSize: 24, color: 'black'}} />
        <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            color: 'black',
            fontWeight: '500',
          }}>
          Instagram
        </Text>
        <Ionicon
          name="navigate-outline"
          style={{fontSize: 24, color: 'black'}}
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <StoriesBar />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Main;
