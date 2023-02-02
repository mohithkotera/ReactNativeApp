import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Signin = () => {
  return (
    <View>
      <View style={{marginTop: 30}}>
        <Image
          source={require('../assests/logo1.png')}
          resizeMode="contain"
          style={{height: undefined, aspectRatio: 0.95, alignSelf: 'center'}}
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 30}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'black',
              borderBottomColor: '#6f2dbd',
              borderBottomWidth: 3,
              width: 100,
            }}>
            Login
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'black'}}>Sign-up</Text>
        </View>
      </View>

      <View style={{marginTop: 60, marginLeft: 40}}>
        <Text style={{fontSize: 20, marginBottom: 6}}>Email address</Text>
        <Text
          style={{
            fontSize: 20,
          }}>
          Dosamarvis@gmail.com
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          width: '80%',
          alignSelf: 'center',
          marginTop: 10,
        }}></View>

      <View style={{marginTop: 40, marginLeft: 40}}>
        <Text style={{fontSize: 20, marginBottom: 6}}>Password</Text>
        <Text
          style={{
            fontSize: 20,
          }}>
          ***********
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          width: '80%',
          alignSelf: 'center',
          marginTop: 10,
        }}></View>
      <View style={{marginTop: 30, marginLeft: 40}}>
        <Text style={{fontSize: 20, marginBottom: 6}}>Forgot Passcode?</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#3f37c9',
          padding: 20,
          width: '70%',
          alignSelf: 'center',
          borderRadius: 30,
          marginTop: 50,
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({});
