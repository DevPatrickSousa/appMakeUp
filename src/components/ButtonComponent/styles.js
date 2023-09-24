import { StyleSheet } from 'react-native';

const buttonStyle = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10
  },
  buttonText:{
    textTransform: 'uppercase',
    color: '#FFF',
  },
  buttonTextContainer:{
    flex: 1,
    alignItems: 'center',
  }
});

export default buttonStyle;
