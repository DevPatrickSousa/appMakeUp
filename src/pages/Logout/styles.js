import { StyleSheet } from 'react-native';

export const loggoutStyles = StyleSheet.create({
  loggoutContainer: {
    flex: 1,
    backgroundColor: '#e989ff',
    alignItems: 'center',
    justifyContent:'center'
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
  buttonActions: {
   flexDirection:'column',
   paddingTop:0,
   paddingBottom:0,
   paddingLeft:0,
   paddingRight:0
  },
  appMakeUp: {
    marginVertical:150
  },
  imageContainer: {
    marginVertical:100
  },
  textAppMakeUp:{
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize:40,
    textShadowColor: '#8025b7', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5,
  },
  dialog:{
    backgroundColor: '#e989ff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.09,
    shadowRadius: 3.45,
    borderRadius:15,
    borderBottomEndRadius:20,
    borderBottomStartRadius:10,
  },
  title:{
    textAlign:'center',
    fontSize:18,
    fontFamily: 'montserrat',
    color:'#FFFF',
    fontWeight:700
  },
  content:{
    marginTop:10
  }
});
