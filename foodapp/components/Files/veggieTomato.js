import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const VeggieTomato = () => {
  return (
    <View style={{backgroundColor: '#f8f9fa', flex: 1}}>
      <View>
        <Image
          source={require('../assests/tomato.png')}
          style={{
            height: undefined,
            width: '100%',
            aspectRatio: 1.1,
          }}
        />
      </View>
      <Text style={{textAlign: 'center', fontSize: 18, color: 'black'}}>
        Veggie Tomato Mix
      </Text>
      <Text style={{textAlign: 'center'}}>N1,900</Text>

      <View style={{marginLeft: 40, marginTop: 30}}>
        <Text style={{color: 'black', fontSize: 17}}>Delivary Info</Text>
        <Text style={{color: 'grey', fontSize: 13}}>
          Delivarable between monday aug and
        </Text>
        <Text style={{color: 'grey', fontSize: 13}}>
          thrusday 20 from 8:30pm to 9:30pm
        </Text>
      </View>
      <View style={{marginLeft: 40, marginTop: 30}}>
        <Text style={{color: 'black', fontSize: 17}}>Privacy Policy</Text>
        <Text style={{color: 'grey', fontSize: 13}}>
          All Of our foods are double checked
        </Text>
        <Text style={{color: 'grey', fontSize: 13}}>
          before leaving our stores so by
        </Text>
        <Text style={{color: 'grey', fontSize: 13}}>
          anycase you found a broken food
        </Text>
        <Text style={{color: 'grey', fontSize: 13}}>
          please contact our hotline immediately
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#3f37c9',
          padding: 15,
          width: '70%',
          alignSelf: 'center',
          borderRadius: 30,
          marginTop: 20,
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
          Add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VeggieTomato;
