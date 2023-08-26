import { StyleSheet } from 'react-native';

export const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA9AB2',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card: {
    width: 327,
    height: 182,
    backgroundColor: '#EA9AB2',
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: 'OpenSans',
  },
  text: {
    color: "#FFFFFF",
    fontFamily: 'nunito',
  },
  logo: {
    width: 194,
    height: 194,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.09,
    shadowRadius: 3.45,
    elevation: 1,
  },
  TouchableOpacity: {
    margin: 0,
    padding: 0
  },
  icon: {
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  info: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 320,
    top: 5
  }

});
