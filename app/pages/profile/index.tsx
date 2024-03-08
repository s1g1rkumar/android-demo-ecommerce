import {Button} from '@rneui/themed';
import {Text, View} from 'react-native';

function Index({navigation}: any): React.JSX.Element {
  const logout = () => {
    navigation.push('Login');
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View>
      <Text>Profile</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
}

export default Index;
