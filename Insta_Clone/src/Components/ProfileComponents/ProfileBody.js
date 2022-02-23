import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './ProfileStyle';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileBody = props => {
  return (
    <View>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image style={styles.accountImage} source={props.accountImage}></Image>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              alignItems: 'center',
              padding: 15,
            }}>
            <Text style={styles.profileText}>{props.posts}</Text>
            <Text>Posts</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              padding: 15,
            }}>
            <Text style={styles.profileText}>{props.followers}</Text>
            <Text>Followers</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              padding: 15,
            }}>
            <Text style={styles.profileText}>{props.following}</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{fontWeight: '500', color: 'black', paddingLeft: 10}}>
          {props.name}
        </Text>
        <Text style={{paddingLeft: 10}}>{props.status}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <TouchableOpacity style={styles.editButton}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'black',
            }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followButton}>
          <Icon
            name="person-add"
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: 'black',
            }}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileBody;
