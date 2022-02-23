import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './HighlightStyle';

const Highlights = () => {
  const HighlightsItem = [
    {
      title: 'Friends',
      image: require('../../Storage/Images/highlight1.jpeg'),
    },
    {
      title: 'Travel',
      image: require('../../Storage/Images/highlight2.jpeg'),
    },
    {
      title: 'Food 🍔',
      image: require('../../Storage/Images/highlight3.jpeg'),
    },
    {
      title: 'Yog ',
      image: require('../../Storage/Images/highlight4.jpeg'),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {HighlightsItem.map((data, index) => {
        return (
          <TouchableOpacity key={index}>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              <View style={styles.StatusItem}>
                <Image style={styles.Avatar} source={data.image}></Image>
              </View>
              <View>
                <Text style={{alignSelf: 'center', color: 'black'}}>
                  {data.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Highlights;
