import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Name: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 7,
    color: 'black',
  },
  Likes: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingRight: 7,
    color: 'black',
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  Image: {
    width: '100%',
    height: 400,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
