import {Chip} from '@rneui/base';
import {Button, Tab, TabView} from '@rneui/themed';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import style from '../home/style';

function Index(): React.JSX.Element {
  const [indexTab, setIndexTab] = React.useState(0);

  const tabClickHandler = (num: any) => {
    setIndexTab(num);
  };

  return (
    <View>
      {/* <ScrollView
        horizontal={true}
        style={[
          style.chipBox,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginHorizontal: 6,
          },
        ]}>
        <View style={[style.chip]}>
          <Chip
            title="Sofa"
            type={indexTab === 0 ? 'solid' : 'outline'}
            onPress={() => tabClickHandler(0)}
          />
          <Chip
            title="Chair"
            type={indexTab === 1 ? 'solid' : 'outline'}
            onPress={() => tabClickHandler(1)}
          />
          <Chip
            title="Table"
            type={indexTab === 2 ? 'solid' : 'outline'}
            onPress={() => tabClickHandler(2)}
          />
          <Chip
            title="kitchen"
            type={indexTab === 3 ? 'solid' : 'outline'}
            onPress={() => tabClickHandler(3)}
          />
          <Chip
            title="Chair"
            type={indexTab === 4 ? 'solid' : 'outline'}
            onPress={() => tabClickHandler(4)}
          />
          <Chip
            title="Table"
            type={indexTab === 5 ? 'solid' : 'outline'}
            onPress={() => tabClickHandler(5)}
          />
        </View>
      </ScrollView> */}
      <ScrollView
        horizontal={true}
        style={[
          style.chipBox,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginHorizontal: 6,
          },
        ]}>
        <View style={[style.chip]}>
          <Button
            // size="sm"
            buttonStyle={{borderRadius: 13}}
            title="Recent"
            type={indexTab === 0 ? 'solid' : 'outline'}
            onPress={() => tabClickHandler(0)}
          />
          <Button
            // size="sm"
            buttonStyle={{borderRadius: 13}}
            title="Favorite"
            type={indexTab === 1 ? 'solid' : 'outline'}
            onPress={() => tabClickHandler(1)}
          />

          <Button
            // size="sm"
            buttonStyle={{borderRadius: 13}}
            title="Cart"
            type={indexTab === 2 ? 'solid' : 'outline'}
            onPress={() => tabClickHandler(2)}
          />
          <Button
            // size="sm"
            buttonStyle={{borderRadius: 13}}
            title="Cart body"
            onPress={() => tabClickHandler(3)}
            type={indexTab === 3 ? 'solid' : 'outline'}
          />
          <Button
            // size="sm"
            buttonStyle={{borderRadius: 13}}
            title="Test body"
            onPress={() => tabClickHandler(4)}
            type={indexTab === 4 ? 'solid' : 'outline'}
          />
          <Button
            // size="sm"
            buttonStyle={{borderRadius: 13}}
            title="Ramu body"
            onPress={() => tabClickHandler(5)}
            type={indexTab === 5 ? 'solid' : 'outline'}
          />
          <Button
            // size="sm"
            buttonStyle={{borderRadius: 13}}
            title="Demo host"
            onPress={() => tabClickHandler(6)}
            type={indexTab === 6 ? 'solid' : 'outline'}
          />
        </View>
      </ScrollView>
      <View style={{height: '91%'}}>
        <TabView value={indexTab} onChange={setIndexTab} animationType="spring">
          <TabView.Item>
            <Text>Recent</Text>
          </TabView.Item>
          <TabView.Item>
            <Text>Favorite</Text>
          </TabView.Item>
          <TabView.Item>
            <Text>Cart</Text>
          </TabView.Item>
          <TabView.Item>
            <Text>Cart body</Text>
          </TabView.Item>
          <TabView.Item>
            <Text>Cart body</Text>
          </TabView.Item>
          <TabView.Item>
            <Text>Cart body</Text>
          </TabView.Item>
          <TabView.Item>
            <Text>Cart body</Text>
          </TabView.Item>
        </TabView>
      </View>
    </View>
  );
}

export default Index;
