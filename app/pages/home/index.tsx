import {Image, Chip} from '@rneui/themed';
import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import style from './style';
import Img from '../../../assets/images/img1.png';

function Index(): React.JSX.Element {
  const product = [
    {
      name: 'Chair',
      price: 2500,
      imgLink: Img,
      rating: 5,
    },
    {
      name: 'Hero',
      price: 2100,
      imgLink: Img,
      rating: 4,
    },
    {
      name: 'Boxes',
      price: 5500,
      imgLink: Img,
      rating: 3,
    },
    {
      name: 'Boriyata',
      price: 3500,
      imgLink: Img,
      rating: 2,
    },
    {
      name: 'Chair Works',
      price: 2500,
      imgLink: Img,
      rating: 5,
    },
    {
      name: 'Hero Parts',
      price: 2100,
      imgLink: Img,
      rating: 4,
    },
    {
      name: 'Boxes Parts',
      price: 5500,
      imgLink: Img,
      rating: 3,
    },
    {
      name: 'Boriyata',
      price: 3500,
      imgLink: Img,
      rating: 2,
    },
  ];

  return (
    <ScrollView>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="tomato" />
        <View style={[style.header]}>
          <Image source={Img} style={{width: 150, height: 150}} />
        </View>
        <View style={[style.chipBox, {marginHorizontal: 6}]}>
          <View style={[style.chip]}>
            <Chip title="Sofa" type="solid" color="secondary" />
            <Chip title="Chair" type="outline" />
            <Chip title="Table" type="outline" />
            <Chip title="kitchen" type="outline" />
            <Chip title="Chair" type="outline" />
            <Chip title="Table" type="outline" />
            <Chip title="kitchen" type="outline" />
          </View>
        </View>
        <View style={[style.box, {marginVertical: 8}]}>
          {product.map((item: any, index: number) => (
            <View key={item.name + index} style={[style.boxItem]}>
              <Image
                source={item.imgLink}
                style={{width: 130, marginBottom: 10, height: 130}}
              />
              <Text
                style={{
                  fontWeight: '600',
                  color: 'black',
                }}>
                {item.name}
              </Text>
              <Text>Rs.{item.price.toFixed(2)}</Text>
            </View>
          ))}
        </View>

        {/* <Tab
          value={TabIndex}
          onChange={e => setTabIndex(e)}
          indicatorStyle={{
            backgroundColor: 'white',
            height: 3,
          }}
          variant="primary">
          <Tab.Item
            title="Recent"
            titleStyle={{fontSize: 12}}
            icon={{name: 'timer', type: 'ionicon', color: 'white'}}
          />
          <Tab.Item
            title="favorite"
            titleStyle={{fontSize: 12}}
            icon={{name: 'heart', type: 'ionicon', color: 'white'}}
          />
          <Tab.Item
            title="cart"
            titleStyle={{fontSize: 12}}
            icon={{name: 'cart', type: 'ionicon', color: 'white'}}
          />
        </Tab> */}

        {/* <TabView value={TabIndex} onChange={setTabIndex} animationType="spring">
          <TabView.Item
            style={{
              backgroundColor: 'red',
              width: '100%',
              height: 250,
              borderWidth: 1,
            }}>
            <Text>Recent</Text>
            <Text>Recent</Text>
          </TabView.Item>
          <TabView.Item
            style={{backgroundColor: 'blue', width: '100%', height: 250}}>
            <Text>Favorite</Text>
          </TabView.Item>
          <TabView.Item
            style={{backgroundColor: 'green', width: '100%', height: 250}}>
            <Text>Cart</Text>
          </TabView.Item>
        </TabView> */}
        {/* <Text>Home</Text>
      <Button title="testing" containerStyle={{width: 250}} /> */}
      </View>
    </ScrollView>
  );
}

export default Index;
