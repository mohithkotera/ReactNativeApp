import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';

const Proceed = () => {
  return (
    <View>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <Icon
            name="chevron-left"
            color="black"
            size={23}
            style={{flex: 0.7}}
          />
          <Text style={{flex: 1, color: 'black', fontSize: 17}}>Checkout</Text>
        </View>
        <Text
          style={{marginLeft: 20, marginTop: 30, fontSize: 24, color: 'black'}}>
          Payment
        </Text>

        <Text
          style={{marginLeft: 20, marginTop: 30, fontSize: 16, color: 'black'}}>
          Payment Method
        </Text>

        <Card containerStyle={{borderRadius: 20}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 20,
            }}>
            <View style={{flex: 0.3, alignItems: 'center'}}>
              <Icon1 name="ios-stop-circle-outline" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Text>
                <Icon2
                  name="creditcard"
                  size={22}
                  color="black"
                  style={{
                    backgroundColor: 'orange',
                    padding: 8,
                    borderRadius: 10,
                  }}
                />
                Card
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 30,
            }}>
            <View style={{flex: 0.3, alignItems: 'center'}}>
              <Icon1 name="ios-stop-circle" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Text>
                <Icon2
                  name="bank"
                  size={22}
                  color="black"
                  style={{
                    backgroundColor: 'violet',
                    padding: 4,
                    borderRadius: 10,
                  }}
                />
                Bank account
              </Text>
            </View>
          </View>
        </Card>
        <Text
          style={{marginLeft: 10, marginTop: 30, fontSize: 20, color: 'black'}}>
          Delivary Method
        </Text>

        <Card
          containerStyle={{
            borderRadius: 20,
            width: '80%',
            alignSelf: 'center',
          }}>
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
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Signin')}
        style={{
          backgroundColor: '#3f37c9',
          padding: 20,
          width: '70%',
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: '10%',
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 18}}>
          Proceed to payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Proceed;
