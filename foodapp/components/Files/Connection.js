import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';

import {Card} from 'react-native-elements';

const Connection = () => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30%',
        }}>
        <Icon1 name="wifi-off" size={130} color="black" />

        <Text style={{fontSize: 20, color: 'black', fontWeight: 500}}>
          No Internet Connection
        </Text>

        <Text>Ypur Internet connection is currently</Text>
        <Text>Not Available please try again later</Text>
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Signin')}
        style={{
          backgroundColor: '#3f37c9',
          padding: 20,
          width: '70%',
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: '20%',
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 18}}>
          Try Again
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Connection;
