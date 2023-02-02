import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';

const Cart = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
        <Icon name="chevron-left" color="black" size={23} style={{flex: 0.8}} />
        <Text style={{color: 'black', fontSize: 18, flex: 1}}>Cart</Text>
      </View>
      <Text style={{textAlign: 'right', marginRight: 10, marginTop: 30}}>
        swipe on an item to delete
      </Text>
      <Card
        containerStyle={{
          borderRadius: 20,
          width: '70%',
          alignSelf: 'flex-end',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.6}}>
            <Image
              source={require('../assests/img1.jpg')}
              style={{
                height: 70,
                width: 70,
                borderRadius: 60,
              }}
            />
          </View>

          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Veggie tomato mix</Text>

            <Text style={{color: 'grey'}}>#1,900</Text>
            <Text
              style={{
                color: 'grey',
                alignSelf: 'flex-end',
                textAlign: 'center',
                backgroundColor: '#6f2dbd',
                width: '35%',
                borderRadius: 10,
              }}>
              - 1 +
            </Text>
          </View>
        </View>
      </Card>
      <Card
        containerStyle={{
          borderRadius: 20,
          width: '70%',
          alignSelf: 'flex-end',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.6}}>
            <Image
              source={require('../assests/img4.jpg')}
              style={{
                height: 70,
                width: 70,
                borderRadius: 60,
              }}
            />
          </View>

          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Fishwith mix orange...</Text>

            <Text style={{color: 'grey'}}>#1,900</Text>
            <Text
              style={{
                color: 'grey',
                alignSelf: 'flex-end',
                textAlign: 'center',
                backgroundColor: '#6f2dbd',
                width: '35%',
                borderRadius: 10,
              }}>
              - 1 +
            </Text>
          </View>
        </View>
      </Card>
      <Card
        containerStyle={{
          borderRadius: 20,
          width: '70%',
          alignSelf: 'flex-start',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.6}}>
            <Image
              source={require('../assests/img6.jpg')}
              style={{
                height: 70,
                width: 70,
                borderRadius: 60,
              }}
            />
          </View>

          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Veggie tomato mix</Text>

            <Text style={{color: 'grey'}}>#1,900</Text>
            <Text
              style={{
                color: 'grey',
                alignSelf: 'flex-end',
                textAlign: 'center',
                backgroundColor: '#6f2dbd',
                width: '35%',
                borderRadius: 10,
              }}>
              - 1 +
            </Text>
          </View>
        </View>
      </Card>
      <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        <Icon1
          name="hearto"
          size={25}
          color="#fff"
          style={{
            backgroundColor: '#6f2dbd',
            width: '10%',
            borderRadius: 20,
            padding: 7,
            marginRight: 10,
          }}
        />
        <Icon1
          name="hearto"
          size={25}
          color="#6f2dbd"
          style={{
            backgroundColor: '#6f2dbd',
            width: '10%',
            borderRadius: 20,
            padding: 7,
            marginRight: 10,
          }}
        />
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Signin')}
        style={{
          backgroundColor: '#3f37c9',
          padding: 20,
          width: '50%',
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: '40%',
        }}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Complete Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
