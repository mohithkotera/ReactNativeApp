import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {Card} from 'react-native-elements';

const MyProfile = () => {
  const navigation = useNavigation();

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
        </View>
        <Text
          style={{marginLeft: 10, marginTop: 30, fontSize: 24, color: 'black'}}>
          My Profile
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
            Personal details
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

        <Card containerStyle={{borderRadius: 20}}>
          <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', fontSize: 17, fontWeight: 500}}>
                Orders
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Icon name="chevron-right" size={25} color="black" />
            </View>
          </View>
        </Card>

        <Card containerStyle={{borderRadius: 20}}>
          <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', fontSize: 17, fontWeight: 500}}>
                Pending Review
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Icon name="chevron-right" size={25} color="black" />
            </View>
          </View>
        </Card>

        <Card containerStyle={{borderRadius: 20}}>
          <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', fontSize: 17, fontWeight: 500}}>
                Faq
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Icon name="chevron-right" size={25} color="black" />
            </View>
          </View>
        </Card>

        <Card containerStyle={{borderRadius: 20}}>
          <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', fontSize: 17, fontWeight: 500}}>
                Help
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Icon name="chevron-right" size={25} color="black" />
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
          marginTop: '10%',
        }}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 18}}>
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyProfile;
