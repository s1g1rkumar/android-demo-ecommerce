import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
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
    gap: 4,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxItem: {
    width: '46%',
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 10,
  },
});

export default style;
