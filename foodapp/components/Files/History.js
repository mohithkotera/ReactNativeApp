import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';

const History = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
        <Icon name="chevron-left" color="black" size={23} style={{flex: 0.7}} />
        <Text style={{color: 'black', fontSize: 18, flex: 1}}>History</Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30%',
        }}>
        <Icon2 name="calendar" size={130} color="black" />

        <Text style={{fontSize: 20, color: 'black', fontWeight: 500}}>
          No History yet
        </Text>

        <Text>Hit the purple button down</Text>
        <Text>Below to create an order</Text>
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Signin')}
        style={{
          backgroundColor: '#3f37c9',
          padding: 20,
          width: '70%',
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: '70%',
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 18}}>
          start ordering
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default History;
