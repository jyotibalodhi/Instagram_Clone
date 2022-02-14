import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ButtonStyle';
const CommentBtn = () => {
  return (
    <TouchableOpacity>
      <Icon name="chatbubble-outline" style={styles.OtherBtn}></Icon>
    </TouchableOpacity>
  );
};

export default CommentBtn;
