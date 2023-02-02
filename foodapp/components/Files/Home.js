import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import {Card} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';

const Home = () => {
  return (
    <View>
      <Icon1
        name="shopping-cart"
        size={25}
        style={{alignSelf: 'flex-end', margin: 30}}
      />
      <View style={{marginTop: 10, marginLeft: 30}}>
        <Text style={{fontSize: 30, color: 'black'}}>Delicious </Text>
        <Text style={{fontSize: 30, color: 'black'}}>Food For You </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          borderRadius: 20,
          borderWidth: 1,
          width: '70%',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Icon name="search" size={26} />
        <TextInput placeholder="Search" />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 30,
          marginLeft: 30,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: '#6f2dbd',
              borderBottomColor: '#6f2dbd',
              borderBottomWidth: 3,
              width: 80,
            }}>
            Food
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'black'}}>Drinks</Text>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'black'}}>Snacks</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'black'}}>Sauce</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 30}}>
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

        <Card containerStyle={{borderRadius: 20}}>
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

        <Card containerStyle={{borderRadius: 20}}>
          <Image
            source={require('../assests/img9.jpg')}
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
        style={{
          flexDirection: 'row',
          marginTop: '20%',

          justifyContent: 'space-around',
        }}>
        <Icon name="home-outline" size={25} color="black" />
        <Icon1 name="heart" size={25} color="black" />
        <Icon1 name="user" size={25} color="black" />
        <Icon name="reload" size={25} color="black" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
