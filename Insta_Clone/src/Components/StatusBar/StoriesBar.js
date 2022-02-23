import 'react-native-gesture-handler';
import React from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import {story} from '../../Storage/StoriesData';
import styles from './StatusStyle';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

const StoriesBar = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {story.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                avatar: data.avatar,
                image: data.status,
                place: data.place,
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Icon
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View style={styles.StatusItem}>
                <Image
                  style={styles.Avatar}
                  source={{uri: data.avatar}}></Image>
              </View>
              {data.id == 1 ? (
                <View>
                  <Text style={{alignSelf: 'center'}}>Your Story</Text>
                </View>
              ) : (
                <View>
                  <Text style={{alignSelf: 'center', color: 'black'}}>
                    {data.name}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default StoriesBar;
