import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        paddingBottom: 10,
        position: 'relative',
      }}>
      <Icon
        name="search"
        style={{
          fontSize: 20,
          zIndex: 1,
          position: 'absolute',
          left: 30,
        }}></Icon>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={{
          width: '95%',
          fontSize: 20,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          paddingLeft: 40,
          borderRadius: 10,
          padding: 5,
          backgroundColor: '#EBEBEB',
        }}></TextInput>
    </View>
  );
};

export default SearchBar;
