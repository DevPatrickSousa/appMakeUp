import { StyleSheet } from 'react-native';

const buttonStyle = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    marginVertical:10,
    justifyContent:'space-between',
    flexDirection:'row',
    alignSelf: 'center',
  },
  buttonText:{
    textTransform: 'uppercase',
    color: '#FFF',
    fontFamily:'OpenSans'
  },
  buttonTextContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    letterSpacing:2
  }
});

export default buttonStyle;
