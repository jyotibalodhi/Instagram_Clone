import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ButtonStyle';
const ShareBtn = () => {
  return (
    <TouchableOpacity>
      <Icon name="paper-plane-outline" style={styles.OtherBtn}></Icon>
    </TouchableOpacity>
  );
};

export default ShareBtn;
