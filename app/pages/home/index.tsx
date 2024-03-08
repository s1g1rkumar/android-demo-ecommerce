import {Image, Chip, Rating} from '@rneui/themed';
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
    <ScrollView>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="tomato" />
        <View style={[style.header]}>
          <Image source={Img} style={{width: 150, height: 150}} />
        </View>
        <ScrollView
          horizontal={true}
          style={[style.chipBox, {marginHorizontal: 6}]}>
          <View style={[style.chip]}>
            <Chip title="Sofa" type="solid" color="secondary" />
            <Chip title="Chair" type="outline" />
            <Chip title="Table" type="outline" />
            <Chip title="kitchen" type="outline" />
            <Chip title="Chair" type="outline" />
            <Chip title="Table" type="outline" />
            <Chip title="kitchen" type="outline" />
          </View>
        </ScrollView>
        <View style={{marginHorizontal: 10}}>
          <ScrollView horizontal={true} style={[style.box]}>
            {product.map((item: any, index: number) => (
              <View key={item.name + index} style={[style.boxItem]}>
                <Image
                  source={item.imgLink}
                  style={{width: 130, marginBottom: 10, height: 130}}
                />
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  {item.name}
                </Text>
                <Text>Rs.{item.price.toFixed(2)}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={[style.box, {}]}>
            {product.slice(0, 4).map((item: any, index: number) => (
              <View key={index} style={[style.verticalBox]}>
                <Image
                  source={item.imgLink}
                  style={{width: 100, marginBottom: 10, height: 90}}
                />
                <View>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                  <Text>Rs.{item.price.toFixed(2)}</Text>
                  <Text style={{width: 205}}>{item.comment}</Text>
                  {/* <Rating
                    ratingCount={4}
                    readonly={false}
                    showReadOnlyText={true}
                    startingValue={5}
                    style={style.rating}
                  /> */}
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Index;
