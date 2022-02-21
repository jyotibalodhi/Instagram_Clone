import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = props => {
  const [text, setText] = useState('');

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
      <TouchableOpacity
        style={{
          zIndex: 1,
          position: 'absolute',
          left: 30,
        }}
        onPress={() => {
          text ? (props.value(text), setText('')) : console.log('second');
        }}>
        <Icon
          style={{
            fontSize: 20,
            zIndex: 1,
            bottom: 4,
          }}
          name="search"></Icon>
      </TouchableOpacity>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        onChangeText={value => setText(value)}
        defaultValue={text}
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
