import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';

const Spicy = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
          backgroundColor: '#ced4da',
          padding: 10,
        }}>
        <Icon name="chevron-left" color="black" size={23} style={{flex: 0.2}} />
        <Text style={{color: 'black', fontSize: 18, flex: 1}}>
          Spicy Chickens
        </Text>
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 24,
          marginTop: 30,
        }}>
        Found 6 Results
      </Text>
      <View
        style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center'}}>
        <Card containerStyle={{borderRadius: 20}}>
          <Image
            source={require('../assests/img1.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 70,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text style={{textAlign: 'center', color: 'black'}}>Veggie</Text>
            <Text style={{textAlign: 'center', color: 'black'}}>
              tomato mix
            </Text>
            <Text style={{textAlign: 'center', color: '#6f2dbd'}}>N1,900</Text>
          </View>
        </Card>
        <Card containerStyle={{borderRadius: 20, top: '15%'}}>
          <Image
            source={require('../assests/img5.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 70,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text style={{textAlign: 'center', color: 'black'}}>Veggie</Text>
            <Text style={{textAlign: 'center', color: 'black'}}>
              tomato mix
            </Text>
            <Text style={{textAlign: 'center', color: '#6f2dbd'}}>N1,900</Text>
          </View>
        </Card>
      </View>
      <View
        style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center'}}>
        <Card containerStyle={{borderRadius: 20}}>
          <Image
            source={require('../assests/img2.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 70,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text style={{textAlign: 'center', color: 'black'}}>Veggie</Text>
            <Text style={{textAlign: 'center', color: 'black'}}>
              tomato mix
            </Text>
            <Text style={{textAlign: 'center', color: '#6f2dbd'}}>N1,900</Text>
          </View>
        </Card>
        <Card containerStyle={{borderRadius: 20, top: '15%'}}>
          <Image
            source={require('../assests/img4.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 70,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text style={{textAlign: 'center', color: 'black'}}>Veggie</Text>
            <Text style={{textAlign: 'center', color: 'black'}}>
              tomato mix
            </Text>
            <Text style={{textAlign: 'center', color: '#6f2dbd'}}>N1,900</Text>
          </View>
        </Card>
      </View>
      <View
        style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center'}}>
        <Card containerStyle={{borderRadius: 20}}>
          <Image
            source={require('../assests/img6.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 70,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text style={{textAlign: 'center', color: 'black'}}>Veggie</Text>
            <Text style={{textAlign: 'center', color: 'black'}}>
              tomato mix
            </Text>
            <Text style={{textAlign: 'center', color: '#6f2dbd'}}>N1,900</Text>
          </View>
        </Card>
        <Card containerStyle={{borderRadius: 20, top: '15%'}}>
          <Image
            source={require('../assests/img2.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 70,
            }}
          />
          <View style={{marginTop: 20}}>
            <Text style={{textAlign: 'center', color: 'black'}}>Veggie</Text>
            <Text style={{textAlign: 'center', color: 'black'}}>
              tomato mix
            </Text>
            <Text style={{textAlign: 'center', color: '#6f2dbd'}}>N1,900</Text>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default Spicy;
