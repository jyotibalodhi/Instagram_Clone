import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './ProfileStyle';

const ProfilePost = props => {
  const postsItem = [
    {
      id: 0,
      images: [
        require('../../Storage/Images/Profile_Page/highlight4.jpeg'),
        require('../../Storage/Images/Profile_Page/highlight1.jpeg'),
        require('../../Storage/Images/Profile_Page/posts1.jpeg'),
        require('../../Storage/Images/Profile_Page/posts2.jpeg'),
        require('../../Storage/Images/Profile_Page/posts3.jpeg'),
        require('../../Storage/Images/Profile_Page/posts4.jpeg'),
        require('../../Storage/Images/Profile_Page/posts5.jpeg'),
        require('../../Storage/Images/Profile_Page/posts6.jpeg'),
        require('../../Storage/Images/Profile_Page/posts7.jpeg'),
      ],
    },
  ];
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity>
            <Icon name="grid-outline" style={styles.ActiveIcon}></Icon>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="play-outline" style={{fontSize: 30}}></Icon>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="people-outline" style={{fontSize: 30}}></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {postsItem.map((data, index) => {
          return (
            <View key={index}>
              {data.id == 0 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  {data.images.map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2, width: '33%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ) : null}
            </View>
          );
        })}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              padding: 70,
            }}>
            No more posts!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfilePost;
