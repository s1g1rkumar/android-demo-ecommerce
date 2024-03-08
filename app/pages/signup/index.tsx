import React from 'react';
import {Text, View} from 'react-native';
import style from '../home/style';
import {Button, Input} from '@rneui/themed';
// import Img from '../../../assets/images/img1.png';

function Index({navigation}: any): React.JSX.Element {
  const signUp = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <View
        style={[
          style.header,
          // eslint-disable-next-line react-native/no-inline-styles
          {borderBottomLeftRadius: 150, borderBottomRightRadius: 150},
        ]}
      />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'white',
          marginTop: -25,
          marginHorizontal: 25,
          borderRadius: 15,
          padding: 25,
          alignItems: 'center',
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 21,
            marginBottom: 15,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Sign Up
        </Text>
        <Input placeholder="Enter Username" keyboardType="email-address" />
        <Input placeholder="Enter Password" secureTextEntry />
        <Button
          title={'SIGN UP'}
          onPress={() => signUp()}
          buttonStyle={{width: 150}}
        />
      </View>

      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
        <Text>
          Already have an account?{' '}
          <Text
            style={{color: 'tomato'}}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default Index;
