import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';

const Myoffer = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
        <Icon name="chevron-left" color="black" size={23} style={{flex: 0.7}} />
      </View>
      <Text
        style={{marginLeft: 20, marginTop: 30, fontSize: 20, color: 'black'}}>
        My Offers
      </Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '60%',
        }}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 500}}>
          ohh snap ? No offers yet
        </Text>

        <Text>bella doesnot have any offer</Text>
        <Text>yet please check again</Text>
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Signin')}
        style={{
          backgroundColor: '#3f37c9',
          padding: 20,
          width: '70%',
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: '50%',
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 18}}>
          start ordering
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Myoffer;
