import React, {useState} from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import SearchContent from '../Components/SearchComponents/SearchContent';
import SearchBar from '../Components/SearchComponents/SearchBar';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const [image, setImage] = useState(null);
  const [searchVal, setSearchVal] = useState('');

  const getData = data => {
    setImage(data);
  };

  const getValue = value => {
    value = value.toLowerCase();
    setSearchVal(value);
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar value={getValue} />
        <SearchContent data={getData} page={searchVal} />
        <TouchableOpacity
          style={{
            margin: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionic name="add-circle" style={{fontSize: 40, opacity: 0.5}} />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52,52,52,0.8)',
          }}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: 'absolute',
              top: windowHeight / 6,
              left: windowWidth / 18,
              backgroundColor: 'white',
              width: '90%',
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  the_anonymous_one
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100%', height: '80%'}} />
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
              <Ionic name="ios-heart-outline" style={{fontSize: 26}} />
              <Ionic name="ios-person-circle-outline" style={{fontSize: 26}} />
              <Ionic name="paper-plane-outline" style={{fontSize: 26}} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default SearchScreen;
