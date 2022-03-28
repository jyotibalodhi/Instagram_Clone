import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  Text,
} from 'react-native';
import Highlights from '../Components/ProfileComponents/Highlights';
import ProfileBody from '../Components/ProfileComponents/ProfileBody';
import ProfileHeader from '../Components/ProfileComponents/ProfileHeader';
import ProfilePost from '../Components/ProfileComponents/ProfilePost';
import Ionic from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const [image, setImage] = useState(null);

  const getData = data => {
    setImage(data);
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        <ProfileHeader accountName="cristina_brown" />
        <ProfileBody
          name="Cristina Brown"
          followers="1.6k"
          following="592"
          accountImage={require('../Storage/Images/accountImage.jpeg')}
          posts="240"
          status={'Glad you thought of coming here😇 \nSaggitarius♐️'}
        />
        <Highlights />
        <ProfilePost data={getData} />
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
                  cristina_brown
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

export default ProfileScreen;
