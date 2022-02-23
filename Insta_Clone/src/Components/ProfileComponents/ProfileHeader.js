import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileHeader = ({accountName}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 20, fontWeight: '700', color: 'black', padding: 2}}>
          {accountName}
        </Text>
        <TouchableOpacity>
          <Icon
            name="chevron-down-outline"
            style={{fontSize: 20, fontWeight: '700', color: 'black'}}></Icon>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <FontAwesome
            name="plus-square-o"
            style={{
              fontSize: 25,
              fontWeight: '700',
              color: 'black',
              paddingRight: 10,
            }}></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="menu"
            style={{
              fontSize: 30,
              fontWeight: '700',
              color: 'black',
              padding: 2,
            }}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
