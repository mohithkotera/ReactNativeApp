import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Landing = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{left: '15%', top: '2%'}}>
        <Image source={require('../assests/logo.png')} />
        <Text style={{fontSize: 60, color: 'black'}}>Food For</Text>
        <Text style={{fontSize: 60, color: 'black'}}>Everyone</Text>
      </View>
      <View style={{marginTop: 10}}>
        <Image
          source={require('../assests/landing.png')}
          resizeMode="contain"
          style={{height: undefined, aspectRatio: 0.95}}
        />
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Signin')}
        style={{
          backgroundColor: '#3f37c9',
          padding: 10,
          width: '50%',
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: 3,
        }}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Get Starteed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
