import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import {posts} from '../../Storage/PostsData';
import styles from '../Post/CardStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import Buttons from '../Buttons/Button';

const Post = () => {
  return (
    <View
      style={{
        paddingBottom: 50,
      }}>
      {posts.map((data, key) => {
        return (
          <View
            key={key}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Image source={{uri: data.avatar}} style={styles.Avatar} />
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.Name}>{data.name}</Text>
                  <Text style={{paddingLeft: 7}}>{data.place}</Text>
                </View>
              </View>

              <Icon
                name="ellipsis-vertical-outline"
                style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}
              />
            </View>
            <View>
              <Image source={{uri: data.image}} style={styles.Image} />
            </View>
            <View>
              <Buttons likes={data.likes} />
              <View
                style={{
                  color: 'black',
                  paddingHorizontal: 5,
                  fontSize: 15,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '700',
                    paddingHorizontal: 5,
                  }}>
                  {data.name}
                </Text>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  {data.postStatus}
                </Text>
              </View>
              <Text style={{opacity: 0.4, paddingVertical: 2, paddingLeft: 10}}>
                View all comments
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 5,
                  paddingBottom: 15,
                }}>
                <Image
                  source={{uri: data.avatar}}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 100,
                    backgroundColor: 'orange',
                    marginRight: 10,
                  }}
                />
                <TextInput
                  placeholder="Add a comment "
                  style={{
                    opacity: 0.5,
                    borderWidth: 0.3,
                    borderRadius: 25,
                    width: '85%',
                    paddingHorizontal: 15,
                  }}
                />
              </View>
              <View>
                <Text style={{fontSize: 20, top: 10, right: 5}}>😊</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
