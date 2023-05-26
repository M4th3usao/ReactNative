import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',

    // backgroundColor: '#CCE5FF'
  },
  card: {
    width: 280,
    height: 350,
    flexDirection: 'column',

    padding: 16,
    margin: 8,
    fontSize: 16,
    alignItems: 'center',

    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  input: {
    alignItems: 'center',
    margin: 5,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameUser: {
    padding: 8,
  },
});

export { styles };
