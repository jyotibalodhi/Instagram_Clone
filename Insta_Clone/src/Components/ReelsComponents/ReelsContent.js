import React, {useState} from 'react';
import {Text} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videoData} from './Database';
import ReelPage from './ReelPage';

const ReelsContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };
  return (
    <SwiperFlatList
      data={videoData}
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      renderItem={({item, index}) => (
        // <ReelPage item={item} index={index} currentIndex={currentIndex} />
        <ReelPage />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ReelsContent;
