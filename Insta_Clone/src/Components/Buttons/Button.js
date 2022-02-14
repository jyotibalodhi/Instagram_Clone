import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import {posts} from '../../Storage/PostsData';
import {useState} from 'react';
import styles from './ButtonStyle';
import CommentBtn from './CommentBtn';
import ShareBtn from './ShareBtn';

const Buttons = ({likes}) => {
  var [isPress, setIsPress] = useState(false);
  var btnColor = isPress ? styles.likeBtnActive : styles.likeBtnNormal;

  const btnPressed = () => {
    if (isPress) {
      setIsPress(false);
      btnColor = styles.likeBtnActive;
    } else {
      setIsPress(true);
      btnColor = styles.likeBtnNormal;
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          paddingTop: 15,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={btnPressed}>
            <Icon style={btnColor} name={isPress ? 'heart' : 'heart-outline'} />
          </TouchableOpacity>
          <CommentBtn />
          <ShareBtn />
        </View>
        <TouchableOpacity>
          <Icon
            name="bookmark-outline"
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          fontSize: 15,
          paddingLeft: 10,
          paddingTop: 2,
        }}>
        <Text style={{color: 'black', paddingVertical: 2}}>
          Liked by {isPress ? `you and ${likes} others ` : `${likes} people`}
        </Text>
      </View>
    </View>
  );
};

export default Buttons;
