import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';

const Payment = () => {
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
          <Text style={{flex: 1, color: 'black', fontSize: 17}}>
            My Profile
          </Text>
        </View>
        <Text
          style={{marginLeft: 20, marginTop: 30, fontSize: 18, color: 'grey'}}>
          information
        </Text>

        <Card containerStyle={{borderRadius: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.6}}>
              <Image
                source={require('../assests/landing.png')}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 70,
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18, color: 'black'}}>Marvis Kparobo</Text>
              <Text style={{color: 'grey', borderBottomWidth: 0.8}}>
                Dosamarvis@gmail.com
              </Text>

              <Text style={{color: 'grey'}}>+23 78434835753</Text>
              <Text style={{color: 'grey', marginTop: 10}}>
                No 15 uti street office
              </Text>
              <Text style={{color: 'grey'}}>palace road jp nagar </Text>
            </View>
          </View>
        </Card>

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
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View style={{flex: 0.3, alignItems: 'center'}}>
              <Icon1 name="ios-stop-circle" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Text>
                {' '}
                <Icon
                  name="paypal"
                  size={22}
                  color="black"
                  style={{
                    backgroundColor: 'blue',
                    padding: 4,
                    borderRadius: 10,
                  }}
                />
                Paypal
              </Text>
            </View>
          </View>
        </Card>
      </View>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Signin')}
        style={{
          backgroundColor: '#3f37c9',
          padding: 20,
          width: '50%',
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: '30%',
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 18}}>
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
