import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';

const Modal = () => {
  return (
    <View style={{backgroundColor: '#adb5bd', flex: 1}}>
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

        <Card containerStyle={{borderRadius: 20, backgroundColor: '#adb5bd'}}>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
              marginTop: 10,
              marginBottom: 20,
              backgroundColor: '#adb5bd',
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
              backgroundColor: '#adb5bd',
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
        <Card
          containerStyle={{
            backgroundColor: 'white',
            position: 'absolute',
            width: '70%',
            top: '40%',
            alignSelf: 'center',
            borderRadius: 20,
            zIndex: 4000,
          }}>
          <Text>Please Note</Text>
          <View style={{borderBottomWidth: 0.8, marginLeft: 20}}>
            <Text>Delivar to mainland</Text>
            <Text style={{color: 'black', fontWeight: 500}}>
              N-1000 &nbsp;&nbsp; N-2000
            </Text>
          </View>
          <View style={{borderBottomWidth: 0.8, marginLeft: 20, marginTop: 20}}>
            <Text>Delivar to island</Text>
            <Text style={{color: 'black', fontWeight: 500}}>
              N-2000 &nbsp;&nbsp; N-3000
            </Text>
          </View>
          <View
            style={{marginTop: 30, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{flex: 1}}>Cancel</Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                backgroundColor: '#3f37c9',
                padding: 10,
                borderRadius: 20,
                color: '#fff',
              }}>
              Proceed
            </Text>
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
            backgroundColor: '#adb5bd',
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
        style={{
          backgroundColor: '#3f37c9',
          padding: 20,
          width: '70%',
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: '10%',
        }}>
        <Text style={{color: 'black', textAlign: 'center', fontSize: 18}}>
          Proceed to payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Modal;
