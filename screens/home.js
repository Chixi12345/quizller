import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import Title from '../components/Title';
import homeImg from '../assets/img/homeImg.png';

const Home = ({navigation}) => {
  const onPress = () => navigation.navigate('Quiz');

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={homeImg} style={styles.banner} resizeMode="contain" />
      </View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },

  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#C147E9',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
  },
});
