import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    height: 250,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bigTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
  },
  chipBox: {},
  chip: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginVertical: 8,
    gap: 10,
  },
  box: {
    marginVertical: 2,
  },
  boxItem: {
    width: 200,
    padding: 10,
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  verticalBox: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 5,
    gap: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 10,
  },
  rating: {},
});

export default style;
