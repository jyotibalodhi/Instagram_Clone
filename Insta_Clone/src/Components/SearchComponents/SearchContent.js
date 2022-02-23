import React from 'react';
import {View, TouchableOpacity, Image, Text, TextPropTypes} from 'react-native';

const SearchContent = props => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../../Storage/Images/search1.jpeg'),
        require('../../Storage/Images/search2.jpeg'),
        require('../../Storage/Images/search3.jpeg'),
        require('../../Storage/Images/search4.jpeg'),
        require('../../Storage/Images/search5.jpeg'),
        require('../../Storage/Images/search6.jpeg'),
      ],
    },
    {
      id: 1,
      images: [
        require('../../Storage/Images/search7.jpeg'),
        require('../../Storage/Images/search8.jpeg'),
        require('../../Storage/Images/search9.jpeg'),
        require('../../Storage/Images/search10.jpeg'),
        require('../../Storage/Images/search11.jpeg'),
        require('../../Storage/Images/search12.jpeg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../../Storage/Images/search13.jpeg'),
        require('../../Storage/Images/search14.jpeg'),
        require('../../Storage/Images/search15.jpeg'),
      ],
    },
  ];

  const searchItem = [
    {
      name: 'food',
      images: [
        require('../../Storage/Images/search6.jpeg'),
        require('../../Storage/Images/search12.jpeg'),
        require('../../Storage/Images/search27.jpeg'),
        require('../../Storage/Images/search16.jpeg'),
        require('../../Storage/Images/search17.jpeg'),
        require('../../Storage/Images/search18.jpeg'),
        require('../../Storage/Images/search19.jpeg'),
        require('../../Storage/Images/search20.jpeg'),
      ],
    },
    {
      name: 'travel',
      images: [
        require('../../Storage/Images/search21.jpeg'),
        require('../../Storage/Images/search9.jpeg'),
        require('../../Storage/Images/search22.jpeg'),
        require('../../Storage/Images/search23.jpeg'),
        require('../../Storage/Images/search24.jpeg'),
        require('../../Storage/Images/search25.jpeg'),
        require('../../Storage/Images/search26.jpeg'),
        require('../../Storage/Images/search7.jpeg'),
      ],
    },
    {
      name: 'view',
      images: [
        require('../../Storage/Images/search11.jpeg'),
        require('../../Storage/Images/search14.jpeg'),
        require('../../Storage/Images/search2.jpeg'),
        require('../../Storage/Images/search5.jpeg'),
        require('../../Storage/Images/search10.jpeg'),
        require('../../Storage/Images/search13.jpeg'),
      ],
    },
  ];

  return props.page ? (
    <View>
      {searchItem.map((data, index) => {
        return (
          <View key={index}>
            {props.page === data.name ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      style={{paddingBottom: 2, width: '49.5%'}}>
                      <Image
                        source={imageData}
                        style={{width: '100%', height: 300}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  ) : (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      style={{paddingBottom: 2, width: '33%'}}>
                      <Image
                        source={imageData}
                        style={{width: '100%', height: 150}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '66.5%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2, width: '49.5%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                  style={{marginLeft: 2, width: '33%'}}>
                  <Image
                    source={data.images[5]}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  style={{paddingRight: 2, width: '66.5%'}}>
                  <Image
                    source={data.images[2]}
                    style={{width: '100%', height: 300}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '33%',
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2, width: '100%'}}>
                        <Image
                          source={imageData}
                          style={{width: '100%', height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
