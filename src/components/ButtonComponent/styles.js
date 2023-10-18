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
    fontFamily: 'OpenSans',
    letterSpacing: 1,
    
  },
  buttonTextContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    letterSpacing:1
  }
});

export default buttonStyle;
