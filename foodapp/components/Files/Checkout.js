import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-elements';

const Checkout = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
        <Icon name="chevron-left" color="black" size={23} style={{flex: 0.8}} />
        <Text style={{color: 'black', fontSize: 18, flex: 1}}>Checkout</Text>
      </View>
      <Text
        style={{marginLeft: 10, marginTop: 30, fontSize: 24, color: 'black'}}>
        Delivary
      </Text>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 30,
            fontSize: 18,
            color: 'black',
            flex: 1,
          }}>
          Adress details
        </Text>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 30,
            fontSize: 14,
            textAlign: 'center',
            color: 'grey',
            flex: 0.5,
          }}>
          change
        </Text>
      </View>
      <Card containerStyle={{borderRadius: 20}}>
        <Text style={{fontSize: 18, color: 'black', borderBottomWidth: 0.8}}>
          Marvis Kparobo
        </Text>
        <View style={{marginTop: 20, borderBottomWidth: 0.8}}>
          <Text style={{color: 'grey'}}>Km 5 refinary road opposite to</Text>
          <Text style={{color: 'grey'}}>public road return delete state</Text>
        </View>
        <Text style={{color: 'grey', marginTop: 10}}>97985943983798</Text>
      </Card>

      <Text
        style={{marginLeft: 10, marginTop: 30, fontSize: 20, color: 'black'}}>
        Delivary Method
      </Text>

      <Card containerStyle={{borderRadius: 20}}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              marginTop: 20,
              borderBottomWidth: 0.8,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: 'grey',
            }}>
            <Icon1 name="ios-stop-circle-outline" />
            <Text style={{color: 'grey'}}>Door Delivary</Text>
          </View>
          <View
            style={{
              marginTop: 20,
              borderBottomWidth: 0.8,
              borderBottomColor: 'grey',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <Icon1 name="ios-stop-circle" />
            <Text style={{color: 'grey'}}>Pick Up</Text>
          </View>
        </View>
      </Card>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 40,
          marginLeft: 20,
        }}>
        <Text style={{color: 'grey', fontSize: 15, flex: 1}}>Total</Text>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            flex: 1,
            textAlign: 'right',
            marginRight: 20,
          }}>
          23,000
        </Text>
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Signin')}
        style={{
          backgroundColor: '#3f37c9',
          padding: 20,
          width: '50%',
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: '10%',
        }}>
        <Text style={{color: '#fff', textAlign: 'center'}}>
          Proceed To Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
