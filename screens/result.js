import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import homeImg from '../assets/img/homeImg.png';

const Result = ({navigation, route}) => {
  const onPress = () => {
    navigation.navigate('Home');
  };

  const params = route?.params;
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={homeImg} style={styles.banner} resizeMode="contain" />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{color: '#ffffff'}}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },

  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    backgroundColor: '#C147E9',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    maxWidth: '25%',
    alignSelf: 'center',
  },
});
