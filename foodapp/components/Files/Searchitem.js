import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';

const Search = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
        <Icon name="chevron-left" color="black" size={23} style={{flex: 0.2}} />
        <Text style={{color: 'black', fontSize: 18, flex: 1}}>
          Spicy Chickens
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30%',
        }}>
        <Icon2 name="search1" size={130} color="black" />

        <Text style={{fontSize: 20, color: 'black', fontWeight: 500}}>
          Items not found
        </Text>

        <Text>Try Searching the item </Text>
        <Text>with different keyword</Text>
      </View>
    </View>
  );
};

export default Search;
