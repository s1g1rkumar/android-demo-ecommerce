import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import Img from '../../../assets/images/img1.png';
import {Image} from '@rneui/themed';
import style from '../home/style';

function renderItem({item}: any) {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        margin: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        // borderWidth: 1,
      }}>
      <Image
        source={item.imgLink}
        style={{resizeMode: 'cover', width: 80, height: 80}}
      />
      <Text style={{marginTop: 5, fontWeight: '600'}}>{item.name}</Text>
    </View>
  );
}

function Index(): React.JSX.Element {
  const product = [
    {
      name: 'Chair',
      price: 2500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 5,
    },
    {
      name: 'Hero',
      price: 2100,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 4,
    },
    {
      name: 'Boxes',
      price: 5500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 3,
    },
    {
      name: 'Boriyata',
      price: 3500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 2,
    },
    {
      name: 'Chair Works',
      price: 2500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 5,
    },
    {
      name: 'Hero Parts',
      price: 2100,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 4,
    },
    {
      name: 'Boxes Parts',
      price: 5500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 3,
    },
    {
      name: 'Boriyata',
      price: 3500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 2,
    },
    {
      name: 'Chair Works',
      price: 2500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 5,
    },
    {
      name: 'Hero Parts',
      price: 2100,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 4,
    },
    {
      name: 'Boxes Parts',
      price: 5500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 3,
    },
    {
      name: 'Boxes Parts',
      price: 5500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 3,
    },
    {
      name: 'Chair',
      price: 2500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 5,
    },
    {
      name: 'Hero',
      price: 2100,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 4,
    },
    {
      name: 'Boxes',
      price: 5500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 3,
    },
    {
      name: 'Boriyata',
      price: 3500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 2,
    },
    {
      name: 'Chair Works',
      price: 2500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 5,
    },
    {
      name: 'Hero Parts',
      price: 2100,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 4,
    },
    {
      name: 'Boxes Parts',
      price: 5500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 3,
    },
    {
      name: 'Boriyata',
      price: 3500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 2,
    },
    {
      name: 'Chair',
      price: 2500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 5,
    },
    {
      name: 'Hero',
      price: 2100,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 4,
    },
    {
      name: 'Boxes',
      price: 5500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 3,
    },
    {
      name: 'Boriyata',
      price: 3500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 2,
    },
    {
      name: 'Chair Works',
      price: 2500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 5,
    },
    {
      name: 'Hero Parts',
      price: 2100,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 4,
    },
    {
      name: 'Boxes Parts',
      price: 5500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 3,
    },
    {
      name: 'Boriyata',
      price: 3500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 2,
    },
    {
      name: 'Chair',
      price: 2500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 5,
    },
    {
      name: 'Hero',
      price: 2100,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 4,
    },
    {
      name: 'Boxes',
      price: 5500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 3,
    },
    {
      name: 'Boriyata',
      price: 3500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 2,
    },
    {
      name: 'Chair Works',
      price: 2500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 5,
    },
    {
      name: 'Hero Parts',
      price: 2100,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 4,
    },
    {
      name: 'Boxes Parts',
      price: 5500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 3,
    },
    {
      name: 'Boriyata',
      price: 3500,
      imgLink: Img,
      comment: 'amountValidator is an array of custom validators...',
      rating: 2,
    },
  ];
  return (
    <View style={{marginHorizontal: 5}}>
      {/* <ScrollView> */}
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        numColumns={3}
        contentContainerStyle={style.container}
      />
      {/* </ScrollView> */}
    </View>
  );
}

export default Index;
